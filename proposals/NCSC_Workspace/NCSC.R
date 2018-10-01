setwd('NCSC_Workspace/')
library(tidyverse)
library(readxl)

hackSheets <- readxl::excel_sheets('Vizathon-Data.xlsx')
hackData <- map(hackSheets, function(x){
  read_excel('Vizathon-Data.xlsx', sheet = x)
})
names(hackData) <- hackSheets

map(hackData, names)

nestedCourtData <- hackData$USState %>%
  select(USStateID, USStateName) %>%
  left_join(hackData$USStateCourt) %>%
  left_join(select(hackData$Court, -DisplayOrder)) %>%
  left_join(select(hackData$Funding, FundingID, FundingDescription)) %>%
  select(-FundingID) %>%
  mutate(CourtID = str_c("CourtID_", CourtID)) %>%
  left_join(select(hackData$AppealProcess, -AppealProcessID) %>%
              mutate_all(function(x) str_c("CourtID_", x)) %>%
              mutate(Child = ChildCourtID,
                     Parent = ParentCourtID) %>%
              group_by(ChildCourtID) %>%
              nest(.key = 'ParentCourts'), 
            by=c('CourtID' = 'ChildCourtID')) %>%
  left_join(
    hackData$CourtCaseType %>%
      left_join(select(hackData$CaseType, -DisplayOrder)) %>%
      select(-CourtCaseTypeID, -CaseTypeID, -DisplayOrder) %>%
      mutate(CourtID = str_c("CourtID_", CourtID)) %>%
      group_by(CourtID) %>% 
      nest(.key = 'CaseTypes')) %>%
  filter(!is.na(CourtLevelID)) %>%
  mutate(CourtName = str_split(CourtName, ' ')) %>%
  group_by(USStateID, USStateName) %>%
  nest(.key = 'Courts') %>%
  mutate(ChildParent = map(Courts, function(x) select(bind_rows(x$ParentCourts), -ParentCourtID)))

nestedCourtDataJSON <- jsonlite::toJSON(nestedCourtData)
write(nestedCourtDataJSON, "nestedCourtData.json")
write(str_c('data = ', nestedCourtDataJSON), 'nestedCourtData.js')

courtTypes <- nestedCourtData %>% unnest() %>% .$CourtLevelID %>% unique

courtTypesJSON <- jsonlite::toJSON(courtTypes)
write(courtTypesJSON, 'courtTypes.json')


state_info <- read.delim('state.psv', sep='|') %>%
  rename(id = STATE) %>%
  mutate(id = sprintf('%02d', id)) %>%
  mutate(STATE_NAME = STATE_NAME %>% as.character() %>% if_else(. == "Hawaii", "Hawai'i", .)) %>%
  left_join(hackData$USState, by = c("STATE_NAME" = 'USStateName')) %>%
  left_join(select(hackData$TrialStructure, -DisplayOrder)) %>%
  left_join(select(hackData$PopulationCategory, -DisplayOrder)) %>%
  left_join(select(hackData$Rural, -DisplayOrder)) %>%
  left_join(select(hackData$TrialCriminalProcessing, -DisplayOrder))  %>%
  left_join(select(hackData$DeathPenalty, -DisplayOrder)) %>%
  left_join(select(hackData$AppellateCriminalStructure, -DisplayOrder)) %>%
  left_join(select(hackData$PopulationDensity, -DisplayOrder)) %>%
  left_join(select(hackData$CaseloadSize, -DisplayOrder), by = c('TrialCaseloadSizeID' = 'CaseloadSizeID')) %>%
  filter(!is.na(TrialCaseloadSizeID)) %>%
  select(-DisplayOrder, -PopulationCategoryID, -RuralID, -TrialStructureID, -TrialCriminalProcessingID, 
         -DeathPenaltyID, -TrialCaseloadSizeID, -AppellateCriminalStructureID, -PopulationDensityID)


us_json <- read_lines('us-10m.v1.json')
write(str_c('us_topo =', us_json), 'us-10m.v1.js')
write_tsv(state_info, 'state.tsv')
state_info_json <- jsonlite::toJSON(state_info) 
write(state_info_json, 'state_info.json')
write(str_c('state_data = ', state_info_json), 'state_data.js')

state_info_keys <- list(TrialStructureDescription = hackData$TrialStructure %>% arrange(DisplayOrder), 
                        PopulationCategoryDescription = hackData$PopulationCategory %>% arrange(DisplayOrder),
                        RuralDescription = hackData$Rural  %>% arrange(DisplayOrder),
                        TrialCriminalProcessingDescription = hackData$TrialCriminalProcessing %>% arrange(DisplayOrder),
                        DeathPenaltyDescription = hackData$DeathPenalty %>% arrange(DisplayOrder), 
                        AppellateCriminalStructureDescription = hackData$AppellateCriminalStructure %>% arrange(DisplayOrder), 
                        PopulationDensityDescription = hackData$PopulationDensity %>% arrange(DisplayOrder),
                        CaseloadSizeDescription = hackData$CaseloadSize %>% arrange(DisplayOrder)) %>%
  lapply('[[', 2)

forests_colors <- colorRamp(c("forestgreen", 'lightgrey'))(0:4/4) %>%
  as.tibble() %>%
  pmap_chr(function(V1, V2, V3) rgb(V1, V2, V3, maxColorValue = 255))
state_info_color <- list(
  c("#bdbdbd", "#636363"),
  rev(grey.colors(7)),
  forests_colors,
  c("#bdbdbd", "#636363"),
  c("#91bfdb", "#fc8d59", 'lightgrey'),
  c("#e41a1c","#377eb8", "#4daf4a", "#984ea3", "#ff7f00",
    "#ffff33", "#a65628", 'lightgrey'),
  rev(grey.colors(7)),
  rev(grey.colors(6))
)

state_info_names <- names(state_info_keys)

createColorScale <- function(name, options, colors){
  str_glue(
    '{name} = d3.scaleOrdinal().domain({jsonlite::toJSON(options)}).range({jsonlite::toJSON(colors)})'
  )
}

colorScaleJson <- pmap(tibble(state_info_names, state_info_keys, state_info_color), function(state_info_names, state_info_keys, state_info_color){createColorScale(state_info_names, state_info_keys, state_info_color)}) %>%
  str_c(collapse = '\n\n')


write(colorScaleJson, 'colorScales.js')



nestedCourtData %>% filter(is.na(CourtName))

nestedCourtData %>% filter(USStateName %in% c("Oklahoma", "Texas"))

hackData$Court %>%
  left_join(hackData$CourtCourtName) %>%
  filter(CourtID == 93) %>%
  select(CourtID, CourtName, CourtCourtNameID, CourtNameID ) %>%
  left_join(hackData$CourtName) %>%
  select(-PanelDecisionID, -NumberPanels, -NumberOfIndividualCourts, -CaseManagementID)
