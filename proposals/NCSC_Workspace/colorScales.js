TrialStructureDescription = d3.scaleOrdinal().domain(["Single Tiered","Two Tiered"]).range(["#bdbdbd","#636363"])

PopulationCategoryDescription = d3.scaleOrdinal().domain(["up to 990,000","990,001 to 1,860,000","1,860,001 to 3,580,000","3,580,001 to 4,780,000","4,780,001 to 6,490,000","6,490,001 to 9,890,000","9,890,001 to highest"]).range(["#E6E6E6","#D5D5D5","#C3C3C3","#AEAEAE","#969696","#787878","#4D4D4D"])

RuralDescription = d3.scaleOrdinal().domain(["Greater than or equal to 50% of the population","26-49% of the population","16-25% of the population","Less than or equal to 15% of the population","Missing information"]).range(["#228B22","#4E9C4E","#7AAF7A","#A6C1A6","#D3D3D3"])

TrialCriminalProcessingDescription = d3.scaleOrdinal().domain(["Single Tiered","Two Tiered"]).range(["#bdbdbd","#636363"])

DeathPenaltyDescription = d3.scaleOrdinal().domain(["No","Yes","Missing information"]).range(["#91bfdb","#fc8d59","lightgrey"])

AppellateCriminalStructureDescription = d3.scaleOrdinal().domain(["COLR Mandatory","COLR Discretionary","Deflective Structure","COLR Discretionary/IAC Mandatory","COLR and IAC Discretionary","IAC by Subject Matter","COLR by Subject Matter","Missing information"]).range(["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","lightgrey"])

PopulationDensityDescription = d3.scaleOrdinal().domain(["0-20","21-50","51-100","101-200","201-500","501-1000","10001-highest"]).range(["#E6E6E6","#D5D5D5","#C3C3C3","#AEAEAE","#969696","#787878","#4D4D4D"])

CaseloadSizeDescription = d3.scaleOrdinal().domain(["Under 200 Thousand","201 Thousand-500 Thousand","501 Thousand-1 Million","1.1 Million-3 Million","3.1 Million-6 Million","Over 6 Million"]).range(["#E6E6E6","#D1D1D1","#BBBBBB","#A0A0A0","#7F7F7F","#4D4D4D"])
