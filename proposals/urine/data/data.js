data = {
  "contractName": "Test",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_testPassResult",
          "type": "string"
        }
      ],
      "name": "testTestPassResult",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newName",
          "type": "string"
        }
      ],
      "name": "setName",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getName",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "pass",
          "type": "bool"
        }
      ],
      "name": "setTestPassResult",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getTestPassResult",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50610593806100206000396000f30060806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806317d7de7c146100725780634cd35dee146101025780637faf45cd14610183578063a2afd242146101b2578063c47f0027146101e1575b600080fd5b34801561007e57600080fd5b5061008761024a565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100c75780820151818401526020810190506100ac565b50505050905090810190601f1680156100f45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561010e57600080fd5b50610169600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506102ec565b604051808215151515815260200191505060405180910390f35b34801561018f57600080fd5b506101b0600480360381019080803515159060200190929190505050610476565b005b3480156101be57600080fd5b506101c7610492565b604051808215151515815260200191505060405180910390f35b3480156101ed57600080fd5b50610248600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506104a8565b005b606060018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102e25780601f106102b7576101008083540402835291602001916102e2565b820191906000526020600020905b8154815290600101906020018083116102c557829003601f168201915b5050505050905090565b6000606080606060006040805190810160405280600481526020017f7061737300000000000000000000000000000000000000000000000000000000815250935085925083915081518351141515610347576000945061046d565b600090505b825181101561046857818181518110151561036357fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191683828151811015156103de57fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614151561045b576000945061046d565b808060010191505061034c565b600194505b50505050919050565b806000806101000a81548160ff02191690831515021790555050565b60008060009054906101000a900460ff16905090565b80600190805190602001906104be9291906104c2565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061050357805160ff1916838001178555610531565b82800160010185558215610531579182015b82811115610530578251825591602001919060010190610515565b5b50905061053e9190610542565b5090565b61056491905b80821115610560576000816000905550600101610548565b5090565b905600a165627a7a723058206dd8f6d48cf5443961b4740210cb23ac24394fb6d7a16680e54d39177dbce14a0029",
  "deployedBytecode": "0x60806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806317d7de7c146100725780634cd35dee146101025780637faf45cd14610183578063a2afd242146101b2578063c47f0027146101e1575b600080fd5b34801561007e57600080fd5b5061008761024a565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100c75780820151818401526020810190506100ac565b50505050905090810190601f1680156100f45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561010e57600080fd5b50610169600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506102ec565b604051808215151515815260200191505060405180910390f35b34801561018f57600080fd5b506101b0600480360381019080803515159060200190929190505050610476565b005b3480156101be57600080fd5b506101c7610492565b604051808215151515815260200191505060405180910390f35b3480156101ed57600080fd5b50610248600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506104a8565b005b606060018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102e25780601f106102b7576101008083540402835291602001916102e2565b820191906000526020600020905b8154815290600101906020018083116102c557829003601f168201915b5050505050905090565b6000606080606060006040805190810160405280600481526020017f7061737300000000000000000000000000000000000000000000000000000000815250935085925083915081518351141515610347576000945061046d565b600090505b825181101561046857818181518110151561036357fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191683828151811015156103de57fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614151561045b576000945061046d565b808060010191505061034c565b600194505b50505050919050565b806000806101000a81548160ff02191690831515021790555050565b60008060009054906101000a900460ff16905090565b80600190805190602001906104be9291906104c2565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061050357805160ff1916838001178555610531565b82800160010185558215610531579182015b82811115610530578251825591602001919060010190610515565b5b50905061053e9190610542565b5090565b61056491905b80821115610560576000816000905550600101610548565b5090565b905600a165627a7a723058206dd8f6d48cf5443961b4740210cb23ac24394fb6d7a16680e54d39177dbce14a0029",
  "sourceMap": "27:894:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;27:894:1;;;;;;;",
  "deployedSourceMap": "27:894:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;644:80;;8:9:-1;5:2;;;30:1;27;20:12;5:2;644:80:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;644:80:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;105:449;;8:9:-1;5:2;;;30:1;27;20:12;5:2;105:449:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;730:84;;8:9:-1;5:2;;;30:1;27;20:12;5:2;730:84:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;820:98;;8:9:-1;5:2;;;30:1;27;20:12;5:2;820:98:1;;;;;;;;;;;;;;;;;;;;;;;;;;;566:72;;8:9:-1;5:2;;;30:1;27;20:12;5:2;566:72:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;644:80;687:6;712:4;705:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;644:80;:::o;105:449::-;177:4;203:23;246:14;296;427:6;203:32;;;;;;;;;;;;;;;;;;;;269:15;246:39;;319:9;296:33;;366:1;:8;354:1;:8;:20;;350:51;;;396:5;389:12;;;;350:51;436:1;427:10;;422:96;443:1;:8;439:1;:12;422:96;;;483:1;485;483:4;;;;;;;;;;;;;;;;;;;;475:12;;;:1;477;475:4;;;;;;;;;;;;;;;;;;;;:12;;;;;471:47;;;513:5;506:12;;;;471:47;452:4;;;;;;;422:96;;;536:4;529:11;;105:449;;;;;;;;:::o;730:84::-;802:4;785:14;;:21;;;;;;;;;;;;;;;;;;730:84;:::o;820:98::-;873:4;896:14;;;;;;;;;;;889:21;;820:98;:::o;566:72::-;623:7;616:4;:14;;;;;;;;;;;;:::i;:::-;;566:72;:::o;27:894::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.0;\r\n\r\ncontract Test{\r\n    bool testPassResult;\r\n    string private name;\r\n    \r\n    function testTestPassResult(string _testPassResult) public view returns(bool){\r\n        \r\n        string memory _tempPass = 'pass';\r\n        bytes memory a = bytes(_testPassResult);\r\n        bytes memory b = bytes(_tempPass);\r\n        \r\n        if (a.length != b.length)\r\n            return false;\r\n        \r\n        for (uint i = 0; i < a.length;i ++)\r\n            if (a[i] != b[i])\r\n                return false;\r\n        return true;\r\n    \r\n    }\r\n    \r\n    function setName(string newName) public{\r\n        name = newName;\r\n    }\r\n    function getName() public constant returns(string){\r\n        return name;\r\n    }\r\n    function setTestPassResult(bool pass) public{\r\n        testPassResult = pass;\r\n    }\r\n    function getTestPassResult() public constant returns(bool){\r\n        return testPassResult;\r\n    }\r\n}",
  "sourcePath": "/Users/ben/test/contracts/Test.sol",
  "ast": {
    "absolutePath": "/Users/ben/test/contracts/Test.sol",
    "exportedSymbols": {
      "Test": [
        155
      ]
    },
    "id": 156,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 58,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 155,
        "linearizedBaseContracts": [
          155
        ],
        "name": "Test",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 60,
            "name": "testPassResult",
            "nodeType": "VariableDeclaration",
            "scope": 155,
            "src": "47:19:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 59,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "47:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 62,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 155,
            "src": "73:19:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 61,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "73:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 117,
              "nodeType": "Block",
              "src": "182:372:1",
              "statements": [
                {
                  "assignments": [
                    70
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 70,
                      "name": "_tempPass",
                      "nodeType": "VariableDeclaration",
                      "scope": 118,
                      "src": "203:23:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 69,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "203:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 72,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "70617373",
                    "id": 71,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "229:6:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_d26794af0798dbe415d32ab1faaa2c70b478f538bf66eea16fc0e275c4350095",
                      "typeString": "literal_string \"pass\""
                    },
                    "value": "pass"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "203:32:1"
                },
                {
                  "assignments": [
                    74
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 74,
                      "name": "a",
                      "nodeType": "VariableDeclaration",
                      "scope": 118,
                      "src": "246:14:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 73,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "246:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 78,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 76,
                        "name": "_testPassResult",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 64,
                        "src": "269:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 75,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "263:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                        "typeString": "type(bytes storage pointer)"
                      },
                      "typeName": "bytes"
                    },
                    "id": 77,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "263:22:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "246:39:1"
                },
                {
                  "assignments": [
                    80
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 80,
                      "name": "b",
                      "nodeType": "VariableDeclaration",
                      "scope": 118,
                      "src": "296:14:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 79,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "296:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 84,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 82,
                        "name": "_tempPass",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 70,
                        "src": "319:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 81,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "313:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                        "typeString": "type(bytes storage pointer)"
                      },
                      "typeName": "bytes"
                    },
                    "id": 83,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "313:16:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "296:33:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 89,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 85,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 74,
                        "src": "354:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 86,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "354:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 87,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 80,
                        "src": "366:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 88,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "366:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "354:20:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 92,
                  "nodeType": "IfStatement",
                  "src": "350:51:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 90,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "396:5:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "functionReturnParameters": 68,
                    "id": 91,
                    "nodeType": "Return",
                    "src": "389:12:1"
                  }
                },
                {
                  "body": {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_bytes1",
                        "typeString": "bytes1"
                      },
                      "id": 110,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 104,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 74,
                          "src": "475:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 106,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 105,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 94,
                          "src": "477:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "475:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes1",
                          "typeString": "bytes1"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 107,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 80,
                          "src": "483:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 109,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 108,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 94,
                          "src": "485:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "483:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes1",
                          "typeString": "bytes1"
                        }
                      },
                      "src": "475:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 113,
                    "nodeType": "IfStatement",
                    "src": "471:47:1",
                    "trueBody": {
                      "expression": {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 111,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "513:5:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      },
                      "functionReturnParameters": 68,
                      "id": 112,
                      "nodeType": "Return",
                      "src": "506:12:1"
                    }
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 100,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 97,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 94,
                      "src": "439:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 98,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 74,
                        "src": "443:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 99,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "443:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "439:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 114,
                  "initializationExpression": {
                    "assignments": [
                      94
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 94,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 118,
                        "src": "427:6:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 93,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "427:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 96,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 95,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "436:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "427:10:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 102,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "452:4:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 101,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 94,
                        "src": "452:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 103,
                    "nodeType": "ExpressionStatement",
                    "src": "452:4:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "422:96:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 115,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "536:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 68,
                  "id": 116,
                  "nodeType": "Return",
                  "src": "529:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 118,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "testTestPassResult",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 65,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64,
                  "name": "_testPassResult",
                  "nodeType": "VariableDeclaration",
                  "scope": 118,
                  "src": "133:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 63,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "133:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "132:24:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 68,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 118,
                  "src": "177:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 66,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "177:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "176:6:1"
            },
            "scope": 155,
            "src": "105:449:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 127,
              "nodeType": "Block",
              "src": "605:33:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 125,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 123,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62,
                      "src": "616:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 124,
                      "name": "newName",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120,
                      "src": "623:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "616:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 126,
                  "nodeType": "ExpressionStatement",
                  "src": "616:14:1"
                }
              ]
            },
            "documentation": null,
            "id": 128,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setName",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 121,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 120,
                  "name": "newName",
                  "nodeType": "VariableDeclaration",
                  "scope": 128,
                  "src": "583:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 119,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "583:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "582:16:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 122,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "605:0:1"
            },
            "scope": 155,
            "src": "566:72:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 135,
              "nodeType": "Block",
              "src": "694:30:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 133,
                    "name": "name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 62,
                    "src": "712:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 132,
                  "id": 134,
                  "nodeType": "Return",
                  "src": "705:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 136,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getName",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 129,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "660:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 132,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 131,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 136,
                  "src": "687:6:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 130,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "687:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "686:8:1"
            },
            "scope": 155,
            "src": "644:80:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 145,
              "nodeType": "Block",
              "src": "774:40:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 143,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 141,
                      "name": "testPassResult",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60,
                      "src": "785:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 142,
                      "name": "pass",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 138,
                      "src": "802:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "785:21:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 144,
                  "nodeType": "ExpressionStatement",
                  "src": "785:21:1"
                }
              ]
            },
            "documentation": null,
            "id": 146,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setTestPassResult",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 139,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 138,
                  "name": "pass",
                  "nodeType": "VariableDeclaration",
                  "scope": 146,
                  "src": "757:9:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 137,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "757:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "756:11:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 140,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "774:0:1"
            },
            "scope": 155,
            "src": "730:84:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 153,
              "nodeType": "Block",
              "src": "878:40:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 151,
                    "name": "testPassResult",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 60,
                    "src": "896:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 150,
                  "id": 152,
                  "nodeType": "Return",
                  "src": "889:21:1"
                }
              ]
            },
            "documentation": null,
            "id": 154,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTestPassResult",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 147,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "846:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 150,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 149,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 154,
                  "src": "873:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 148,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "873:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "872:6:1"
            },
            "scope": 155,
            "src": "820:98:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 156,
        "src": "27:894:1"
      }
    ],
    "src": "0:921:1"
  },
  "legacyAST": {
    "absolutePath": "/Users/ben/test/contracts/Test.sol",
    "exportedSymbols": {
      "Test": [
        155
      ]
    },
    "id": 156,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 58,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 155,
        "linearizedBaseContracts": [
          155
        ],
        "name": "Test",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 60,
            "name": "testPassResult",
            "nodeType": "VariableDeclaration",
            "scope": 155,
            "src": "47:19:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 59,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "47:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 62,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 155,
            "src": "73:19:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 61,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "73:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 117,
              "nodeType": "Block",
              "src": "182:372:1",
              "statements": [
                {
                  "assignments": [
                    70
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 70,
                      "name": "_tempPass",
                      "nodeType": "VariableDeclaration",
                      "scope": 118,
                      "src": "203:23:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 69,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "203:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 72,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "70617373",
                    "id": 71,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "229:6:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_d26794af0798dbe415d32ab1faaa2c70b478f538bf66eea16fc0e275c4350095",
                      "typeString": "literal_string \"pass\""
                    },
                    "value": "pass"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "203:32:1"
                },
                {
                  "assignments": [
                    74
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 74,
                      "name": "a",
                      "nodeType": "VariableDeclaration",
                      "scope": 118,
                      "src": "246:14:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 73,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "246:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 78,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 76,
                        "name": "_testPassResult",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 64,
                        "src": "269:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 75,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "263:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                        "typeString": "type(bytes storage pointer)"
                      },
                      "typeName": "bytes"
                    },
                    "id": 77,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "263:22:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "246:39:1"
                },
                {
                  "assignments": [
                    80
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 80,
                      "name": "b",
                      "nodeType": "VariableDeclaration",
                      "scope": 118,
                      "src": "296:14:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 79,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "296:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 84,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 82,
                        "name": "_tempPass",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 70,
                        "src": "319:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 81,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "313:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                        "typeString": "type(bytes storage pointer)"
                      },
                      "typeName": "bytes"
                    },
                    "id": 83,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "313:16:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "296:33:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 89,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 85,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 74,
                        "src": "354:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 86,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "354:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 87,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 80,
                        "src": "366:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 88,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "366:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "354:20:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 92,
                  "nodeType": "IfStatement",
                  "src": "350:51:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 90,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "396:5:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "functionReturnParameters": 68,
                    "id": 91,
                    "nodeType": "Return",
                    "src": "389:12:1"
                  }
                },
                {
                  "body": {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_bytes1",
                        "typeString": "bytes1"
                      },
                      "id": 110,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 104,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 74,
                          "src": "475:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 106,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 105,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 94,
                          "src": "477:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "475:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes1",
                          "typeString": "bytes1"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 107,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 80,
                          "src": "483:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 109,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 108,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 94,
                          "src": "485:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "483:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes1",
                          "typeString": "bytes1"
                        }
                      },
                      "src": "475:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 113,
                    "nodeType": "IfStatement",
                    "src": "471:47:1",
                    "trueBody": {
                      "expression": {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 111,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "513:5:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      },
                      "functionReturnParameters": 68,
                      "id": 112,
                      "nodeType": "Return",
                      "src": "506:12:1"
                    }
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 100,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 97,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 94,
                      "src": "439:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 98,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 74,
                        "src": "443:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 99,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "443:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "439:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 114,
                  "initializationExpression": {
                    "assignments": [
                      94
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 94,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 118,
                        "src": "427:6:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 93,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "427:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 96,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 95,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "436:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "427:10:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 102,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "452:4:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 101,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 94,
                        "src": "452:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 103,
                    "nodeType": "ExpressionStatement",
                    "src": "452:4:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "422:96:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 115,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "536:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 68,
                  "id": 116,
                  "nodeType": "Return",
                  "src": "529:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 118,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "testTestPassResult",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 65,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64,
                  "name": "_testPassResult",
                  "nodeType": "VariableDeclaration",
                  "scope": 118,
                  "src": "133:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 63,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "133:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "132:24:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 68,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 118,
                  "src": "177:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 66,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "177:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "176:6:1"
            },
            "scope": 155,
            "src": "105:449:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 127,
              "nodeType": "Block",
              "src": "605:33:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 125,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 123,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62,
                      "src": "616:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 124,
                      "name": "newName",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120,
                      "src": "623:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "616:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 126,
                  "nodeType": "ExpressionStatement",
                  "src": "616:14:1"
                }
              ]
            },
            "documentation": null,
            "id": 128,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setName",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 121,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 120,
                  "name": "newName",
                  "nodeType": "VariableDeclaration",
                  "scope": 128,
                  "src": "583:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 119,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "583:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "582:16:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 122,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "605:0:1"
            },
            "scope": 155,
            "src": "566:72:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 135,
              "nodeType": "Block",
              "src": "694:30:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 133,
                    "name": "name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 62,
                    "src": "712:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 132,
                  "id": 134,
                  "nodeType": "Return",
                  "src": "705:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 136,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getName",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 129,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "660:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 132,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 131,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 136,
                  "src": "687:6:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 130,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "687:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "686:8:1"
            },
            "scope": 155,
            "src": "644:80:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 145,
              "nodeType": "Block",
              "src": "774:40:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 143,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 141,
                      "name": "testPassResult",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60,
                      "src": "785:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 142,
                      "name": "pass",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 138,
                      "src": "802:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "785:21:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 144,
                  "nodeType": "ExpressionStatement",
                  "src": "785:21:1"
                }
              ]
            },
            "documentation": null,
            "id": 146,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setTestPassResult",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 139,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 138,
                  "name": "pass",
                  "nodeType": "VariableDeclaration",
                  "scope": 146,
                  "src": "757:9:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 137,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "757:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "756:11:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 140,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "774:0:1"
            },
            "scope": 155,
            "src": "730:84:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 153,
              "nodeType": "Block",
              "src": "878:40:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 151,
                    "name": "testPassResult",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 60,
                    "src": "896:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 150,
                  "id": 152,
                  "nodeType": "Return",
                  "src": "889:21:1"
                }
              ]
            },
            "documentation": null,
            "id": 154,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTestPassResult",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 147,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "846:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 150,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 149,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 154,
                  "src": "873:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 148,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "873:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "872:6:1"
            },
            "scope": 155,
            "src": "820:98:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 156,
        "src": "27:894:1"
      }
    ],
    "src": "0:921:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "4447": {
      "events": {},
      "links": {},
      "address": "0x345ca3e014aaf5dca488057592ee47305d9b3e10",
      "transactionHash": "0x39bf2ed296e1c193602388c617666c29349fda30df9005396b098500edfa2ef3"
    }
  },
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-14T13:43:15.349Z"
}
