var abi = [
          	{
          		"constant": false,
          		"inputs": [
          			{
          				"name": "participantAddresses",
          				"type": "address[]"
          			}
          		],
          		"name": "addMultipleParticipants",
          		"outputs": [],
          		"payable": false,
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"constant": false,
          		"inputs": [],
          		"name": "approveSellProposal",
          		"outputs": [],
          		"payable": false,
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "getLastExpensesPaid",
          		"outputs": [
          			{
          				"name": "",
          				"type": "uint256"
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
          				"name": "time",
          				"type": "uint256"
          			}
          		],
          		"name": "carExpenses",
          		"outputs": [],
          		"payable": false,
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "getCarDealer",
          		"outputs": [
          			{
          				"name": "",
          				"type": "address"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "carDealer",
          		"outputs": [
          			{
          				"name": "addr",
          				"type": "address"
          			},
          			{
          				"name": "salary",
          				"type": "uint256"
          			},
          			{
          				"name": "balance",
          				"type": "uint256"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "getCarDealerBalance",
          		"outputs": [
          			{
          				"name": "",
          				"type": "uint256"
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
          				"name": "time",
          				"type": "uint256"
          			}
          		],
          		"name": "payDividend",
          		"outputs": [],
          		"payable": false,
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "earnedMoney",
          		"outputs": [
          			{
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "getProposedCar",
          		"outputs": [
          			{
          				"name": "",
          				"type": "uint32"
          			},
          			{
          				"name": "",
          				"type": "uint256"
          			},
          			{
          				"name": "",
          				"type": "uint256"
          			},
          			{
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [
          			{
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"name": "participants",
          		"outputs": [
          			{
          				"name": "",
          				"type": "address"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": false,
          		"inputs": [],
          		"name": "fireDriver",
          		"outputs": [],
          		"payable": false,
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"constant": false,
          		"inputs": [],
          		"name": "approveDriver",
          		"outputs": [],
          		"payable": false,
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "getDriver",
          		"outputs": [
          			{
          				"name": "",
          				"type": "address"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "manager",
          		"outputs": [
          			{
          				"name": "",
          				"type": "address"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "lastExpsensesPaid",
          		"outputs": [
          			{
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": false,
          		"inputs": [],
          		"name": "getSalary",
          		"outputs": [],
          		"payable": false,
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "getParticipants",
          		"outputs": [
          			{
          				"name": "",
          				"type": "address[]"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": false,
          		"inputs": [],
          		"name": "approvePurchaseCar",
          		"outputs": [],
          		"payable": false,
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "spentMoney",
          		"outputs": [
          			{
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "getProposedRepurchaseCar",
          		"outputs": [
          			{
          				"name": "",
          				"type": "uint32"
          			},
          			{
          				"name": "",
          				"type": "uint256"
          			},
          			{
          				"name": "",
          				"type": "uint256"
          			},
          			{
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "driver",
          		"outputs": [
          			{
          				"name": "addr",
          				"type": "address"
          			},
          			{
          				"name": "salary",
          				"type": "uint256"
          			},
          			{
          				"name": "balance",
          				"type": "uint256"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "getContractBalance",
          		"outputs": [
          			{
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": false,
          		"inputs": [],
          		"name": "getDivindend",
          		"outputs": [],
          		"payable": true,
          		"stateMutability": "payable",
          		"type": "function"
          	},
          	{
          		"constant": false,
          		"inputs": [
          			{
          				"name": "_dealerAddress",
          				"type": "address"
          			}
          		],
          		"name": "setCarDealer",
          		"outputs": [],
          		"payable": false,
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "proposedCar",
          		"outputs": [
          			{
          				"name": "id",
          				"type": "uint32"
          			},
          			{
          				"name": "addr",
          				"type": "address"
          			},
          			{
          				"name": "value",
          				"type": "uint256"
          			},
          			{
          				"name": "offerValidTime",
          				"type": "uint256"
          			},
          			{
          				"name": "approvalState",
          				"type": "uint256"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "getLastSalaryPaid",
          		"outputs": [
          			{
          				"name": "",
          				"type": "uint256"
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
          				"name": "driverAddr",
          				"type": "address"
          			},
          			{
          				"name": "salary",
          				"type": "uint256"
          			}
          		],
          		"name": "proposeDriver",
          		"outputs": [],
          		"payable": false,
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "lastSalaryPaid",
          		"outputs": [
          			{
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "proposedRepurchase",
          		"outputs": [
          			{
          				"name": "id",
          				"type": "uint32"
          			},
          			{
          				"name": "addr",
          				"type": "address"
          			},
          			{
          				"name": "value",
          				"type": "uint256"
          			},
          			{
          				"name": "offerValidTime",
          				"type": "uint256"
          			},
          			{
          				"name": "approvalState",
          				"type": "uint256"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "getDriverBalance",
          		"outputs": [
          			{
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "getProposedDriver",
          		"outputs": [
          			{
          				"name": "",
          				"type": "address"
          			},
          			{
          				"name": "",
          				"type": "uint256"
          			},
          			{
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "lastDividenedPaid",
          		"outputs": [
          			{
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "getLastDividenedPaid",
          		"outputs": [
          			{
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": false,
          		"inputs": [],
          		"name": "setDriver",
          		"outputs": [],
          		"payable": false,
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"constant": false,
          		"inputs": [],
          		"name": "getCharge",
          		"outputs": [],
          		"payable": true,
          		"stateMutability": "payable",
          		"type": "function"
          	},
          	{
          		"constant": false,
          		"inputs": [],
          		"name": "join",
          		"outputs": [],
          		"payable": false,
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "balance",
          		"outputs": [
          			{
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "getDriverObj",
          		"outputs": [
          			{
          				"name": "",
          				"type": "address"
          			},
          			{
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "getApprovedParticipants",
          		"outputs": [
          			{
          				"name": "",
          				"type": "address[]"
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
          				"name": "price",
          				"type": "uint256"
          			},
          			{
          				"name": "offerValidTime",
          				"type": "uint256"
          			}
          		],
          		"name": "carProposeToBusiness",
          		"outputs": [],
          		"payable": false,
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "getOwnedCar",
          		"outputs": [
          			{
          				"name": "",
          				"type": "uint32"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "getManager",
          		"outputs": [
          			{
          				"name": "",
          				"type": "address"
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
          				"name": "time",
          				"type": "uint256"
          			}
          		],
          		"name": "purchaseCar",
          		"outputs": [],
          		"payable": false,
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"constant": false,
          		"inputs": [
          			{
          				"name": "time",
          				"type": "uint256"
          			}
          		],
          		"name": "releaseSalary",
          		"outputs": [],
          		"payable": false,
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "ownedCar",
          		"outputs": [
          			{
          				"name": "",
          				"type": "uint32"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [
          			{
          				"name": "participant",
          				"type": "address"
          			}
          		],
          		"name": "getParticipantBalance",
          		"outputs": [
          			{
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": false,
          		"inputs": [],
          		"name": "repurchaseCar",
          		"outputs": [],
          		"payable": true,
          		"stateMutability": "payable",
          		"type": "function"
          	},
          	{
          		"constant": false,
          		"inputs": [
          			{
          				"name": "price",
          				"type": "uint256"
          			},
          			{
          				"name": "offerValidTime",
          				"type": "uint256"
          			}
          		],
          		"name": "repurchaseCarPropose",
          		"outputs": [],
          		"payable": false,
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "proposedDriver",
          		"outputs": [
          			{
          				"name": "id",
          				"type": "uint32"
          			},
          			{
          				"name": "addr",
          				"type": "address"
          			},
          			{
          				"name": "value",
          				"type": "uint256"
          			},
          			{
          				"name": "offerValidTime",
          				"type": "uint256"
          			},
          			{
          				"name": "approvalState",
          				"type": "uint256"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"inputs": [],
          		"payable": false,
          		"stateMutability": "nonpayable",
          		"type": "constructor"
          	}
          ];

var addr = "0x63179a8a04fcDbC58A4Af5e8c56FAb69fDD70d28";

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

var participantAccount = {};
var joinedParticipants = [];
var driverAddr;
var carDealerAddr;

var noAddr = "0x0000000000000000000000000000000000000000";

var d = new Date();
var interval = setInterval(function(){
    d.setSeconds(d.getSeconds() + 1);
    document.getElementById("dateField").innerHTML = d.toLocaleDateString();
    document.getElementById("timeField").innerHTML = d.toLocaleTimeString();
}, 1000);

var lastSalaryPaid = 0;
var lastCarExpensesPaid = 0;
var lastDividendPaid = 0;

(async () => {
    const accounts = await web3.eth.getAccounts();

    // currently manager is active
    web3.eth.defaultAccount = accounts[0];

    var taxiContract = new web3.eth.Contract(abi, addr);

    var manager =  accounts[0];
    var carDealer = accounts[1];
    var driver = null;
    var participants = [];

    fillProposedCar(taxiContract);
    fillProposedDriver(taxiContract);
    fillRepurchaseCar(taxiContract);
    fillApprovedCar(taxiContract);
    fillHiredDriver(taxiContract);
    createOptions(taxiContract, accounts);
    getOtherBalances(taxiContract);

    $('#identity-combobox').on('change', function (e) {
        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;
    });

    $("#join-button").click(function() {
        var identityCombo = document.getElementById("identity-combobox");
        var id = identityCombo.options[identityCombo.selectedIndex].text;
        var acc = identityCombo.options[identityCombo.selectedIndex].value;
        if (!(id == "Manager" || id == "Car Dealer" || id == "Driver") && !joinedParticipants.includes(acc)) {
            taxiContract.methods.join().send({from: acc}).then((res, err) => {
                createOptions(taxiContract, accounts);
                getOtherBalances(taxiContract);
                document.getElementById("errorField-1").innerHTML="";
            }).catch(err => {
                document.getElementById("errorField-1").innerHTML=error;
                console.log(err);
            });
        } else {
            document.getElementById("errorField-1").innerHTML = identityCombo.options[identityCombo.selectedIndex].text +
            " cannot be added as participant.";
        }
    });

    $("#add_7_participants").click(function() {
        var identityCombo = document.getElementById("identity-combobox");
        var idOptions = identityCombo.options;

        var participantsToAdd = [];
        for (var i = 0; i < idOptions.length; i++) {
            if (idOptions[i].text.match("Person") !== null && participantsToAdd.length < 7) {
                participantsToAdd.push(idOptions[i].value);
            }
        }

        console.log(participantsToAdd);
        taxiContract.methods.addMultipleParticipants(participantsToAdd).send({from: accounts[0], gas:3000000}).then((res, err) => {
            createOptions(taxiContract, accounts);
            getOtherBalances(taxiContract);
        }).catch(err => {
            console.log(err);
        });
    });

    $("#set-dealer-button").click(function() {

        var identityCombo = document.getElementById("identity-combobox");
        var acc = identityCombo.options[identityCombo.selectedIndex].value;

        var idOptions = identityCombo.options;

        var potentialDealerCombobox = document.createElement("select");
        for (var i = 0; i < idOptions.length; i++) {
            if (idOptions[i].text.match("Person") !== null) {
                var option = document.createElement("option");
                option.text = idOptions[i].text;
                option.value = idOptions[i].value;
                potentialDealerCombobox.add(option, i);
            }
        }
        var popup = document.getElementById("popup");

        var popupContent = document.getElementById("popup-content");

        popupContent.innerHTML = "";

        var dealerSelectInfo = document.createElement("div");
        dealerSelectInfo.innerHTML = "Select a person to be the dealer";
        dealerSelectInfo.classList.add("popup-description");

        var applyButton =  document.createElement("button");
        applyButton.classList.add("applyButton");
        applyButton.id = "applyButton";
        applyButton.innerHTML = "OK";
        applyButton.onclick = function() {
            taxiContract.methods.setCarDealer(potentialDealerCombobox.options[potentialDealerCombobox.selectedIndex].value)
                .send({from: acc}).then((res, err) => {
                console.log(res);
                document.getElementById("errorField-2").innerHTML="";
                popup.style.display = "none";
                createOptions(taxiContract, accounts);
            }).catch(err => {
                popup.style.display = "none";
                document.getElementById("errorField-2").innerHTML= "Only manager can call this function.";
                console.log(err);
            });
        };

        var cancelButton =  document.createElement("button");
        cancelButton.classList.add("cancelButton");
        cancelButton.id = "cancelButton";
        cancelButton.innerHTML = "Cancel";
        cancelButton.onclick = function() {
            popup.style.display = "none";
        };

        popupContent.appendChild(dealerSelectInfo);
        popupContent.appendChild(potentialDealerCombobox);

        var buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");
        buttonContainer.appendChild(applyButton);
        buttonContainer.appendChild(cancelButton);
        popupContent.appendChild(buttonContainer);

        popup.style.display = "block";
    });

    $("#propose-car-button").click(function() {

        var identityCombo = document.getElementById("identity-combobox");
        var acc = identityCombo.options[identityCombo.selectedIndex].value;

        var idOptions = identityCombo.options;

        var popup = document.getElementById("popup");

        var popupContent = document.getElementById("popup-content");

        popupContent.innerHTML = "";

        var carInfo = document.createElement("div");
        carInfo.innerHTML = "Fill a car information.";
        carInfo.classList.add("popup-description");

        var applyButton =  document.createElement("button");
        applyButton.classList.add("applyButton");
        applyButton.id = "applyButton";
        applyButton.innerHTML = "OK";
        applyButton.onclick = function() {
            var inputTime = new Date(document.getElementById("popup-proposed-car-date").value);
            taxiContract.methods.carProposeToBusiness(document.getElementById("popup-proposed-car-price").value, inputTime.getTime())
                .send({from: acc}).then((res, err) => {
                console.log(res);
                document.getElementById("errorField-3").innerHTML="";
                popup.style.display = "none";
                fillProposedCar(taxiContract);
                createOptions(taxiContract, accounts);
            }).catch(err => {
                popup.style.display = "none";
                document.getElementById("errorField-3").innerHTML= "Only car dealer can call this function.";
                console.log(err);
            });
        };
        var cancelButton =  document.createElement("button");
        cancelButton.classList.add("cancelButton");
        cancelButton.id = "cancelButton";
        cancelButton.innerHTML = "Cancel";
        cancelButton.onclick = function() {
            popup.style.display = "none";
        };

        popupContent.appendChild(carInfo);

        //car information
        var pairContainer1 = document.createElement("div");
        pairContainer1.classList.add("popup-car-info-pair");
        var carPriceLabel = document.createElement("div");
        carPriceLabel.classList.add("popup-car-info-label");
        carPriceLabel.innerHTML = "Car Price";
        var carPriceInput = document.createElement("input");
        carPriceInput.classList.add("popup-car-info-input");
        carPriceInput.type = "number";
        carPriceInput.min = "0";
        carPriceInput.id = "popup-proposed-car-price";
        pairContainer1.appendChild(carPriceLabel);
        pairContainer1.appendChild(carPriceInput);
        popupContent.appendChild(pairContainer1);

        var pairContainer2 = document.createElement("div");
        pairContainer2.classList.add("popup-car-info-pair");
        var carTimeLabel = document.createElement("div");
        carTimeLabel.classList.add("popup-car-info-label");
        carTimeLabel.innerHTML = "Offer Valid Time";
        var carTimeInput = document.createElement("input");
        carTimeInput.classList.add("popup-car-info-input");
        carTimeInput.type = "date";
        carTimeInput.valueAsDate = new Date();
        carTimeInput.id = "popup-proposed-car-date";
        pairContainer2.appendChild(carTimeLabel);
        pairContainer2.appendChild(carTimeInput);
        popupContent.appendChild(pairContainer2);

        var buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");
        buttonContainer.appendChild(applyButton);
        buttonContainer.appendChild(cancelButton);
        popupContent.appendChild(buttonContainer);

        popup.style.display = "block";
    });

    $("#propose-driver-button").click(function() {

        var identityCombo = document.getElementById("identity-combobox");
        var acc = identityCombo.options[identityCombo.selectedIndex].value;

        var idOptions = identityCombo.options;

        var popup = document.getElementById("popup");

        var popupContent = document.getElementById("popup-content");

        popupContent.innerHTML = "";

        var info = document.createElement("div");
        info.innerHTML = "Fill a driver information.";
        info.classList.add("popup-description");

        var applyButton =  document.createElement("button");
        applyButton.classList.add("applyButton");
        applyButton.id = "applyButton";
        applyButton.innerHTML = "OK";
        applyButton.onclick = function() {
            taxiContract.methods.proposeDriver(document.getElementById("popup-proposed-driver-address").value, document.getElementById("popup-proposed-driver-salary").value)
                .send({from: acc}).then((res, err) => {
                console.log(res);
                document.getElementById("errorField-8").innerHTML="";
                popup.style.display = "none";
                fillProposedDriver(taxiContract);
                createOptions(taxiContract, accounts);
            }).catch(err => {
                popup.style.display = "none";
                document.getElementById("errorField-8").innerHTML= "Only manager can call this function.";
                console.log(err);
            });
        };
        var cancelButton =  document.createElement("button");
        cancelButton.classList.add("cancelButton");
        cancelButton.id = "cancelButton";
        cancelButton.innerHTML = "Cancel";
        cancelButton.onclick = function() {
            popup.style.display = "none";
        };

        popupContent.appendChild(info);

        //driver information
        var pairContainer1 = document.createElement("div");
        pairContainer1.classList.add("popup-car-info-pair");
        var driverIdLabel = document.createElement("div");
        driverIdLabel.classList.add("popup-car-info-label");
        driverIdLabel.innerHTML = "Driver";

        var idOptions = identityCombo.options;
        var potentialDriverCombobox = document.createElement("select");
        potentialDriverCombobox.id = "popup-proposed-driver-address";
        for (var i = 0; i < idOptions.length; i++) {
            if (idOptions[i].text.match("Person") !== null) {
                var option = document.createElement("option");
                option.text = idOptions[i].text;
                option.value = idOptions[i].value;
                potentialDriverCombobox.add(option, i);
            }
        }

        pairContainer1.appendChild(driverIdLabel);
        pairContainer1.appendChild(potentialDriverCombobox);
        popupContent.appendChild(pairContainer1);

        var pairContainer2 = document.createElement("div");
        pairContainer2.classList.add("popup-car-info-pair");
        var salaryLabel = document.createElement("div");
        salaryLabel.classList.add("popup-car-info-label");
        salaryLabel.innerHTML = "Salary";
        var salaryInput = document.createElement("input");
        salaryInput.classList.add("popup-car-info-input");
        salaryInput.type = "number";
        salaryInput.min = "0";
        salaryInput.id = "popup-proposed-driver-salary";

        pairContainer2.appendChild(salaryLabel);
        pairContainer2.appendChild(salaryInput);
        popupContent.appendChild(pairContainer2);

        var buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");
        buttonContainer.appendChild(applyButton);
        buttonContainer.appendChild(cancelButton);
        popupContent.appendChild(buttonContainer);

        popup.style.display = "block";
    });

    $("#approve-proposed-car").click(function() {
        var identityCombo = document.getElementById("identity-combobox");
        var acc = identityCombo.options[identityCombo.selectedIndex].value;
        if (identityCombo.options[identityCombo.selectedIndex].text.match("Participant")) {
            taxiContract.methods.approvePurchaseCar().send({from: acc}).then((res, err) => {
                document.getElementById("errorField-4").innerHTML="";
                var approvedNum = parseInt(document.getElementById("proposed-approval-state").innerHTML);
                document.getElementById("proposed-approval-state").innerHTML = approvedNum + 1;
            }).catch(err => {
                taxiContract.methods.getProposedCar().call().then((result, error) => {
                    if (result[0] == 0) {
                        document.getElementById("errorField-4").innerHTML= "There is no proposed car exist.";
                    } else {
                        document.getElementById("errorField-4").innerHTML= "Cannot approve the proposed car.";
                    }
                });
            });
        } else {
            document.getElementById("errorField-4").innerHTML= "Only participants can approve.";
        }
    });

    $("#approve-proposed-driver").click(function() {
        var identityCombo = document.getElementById("identity-combobox");
        var acc = identityCombo.options[identityCombo.selectedIndex].value;
        taxiContract.methods.getProposedDriver().call().then((result, error) => {
            if (result[0] == noAddr) {
                document.getElementById("errorField-7").innerHTML= "There is no proposed driver exist.";
            } else {
                if (identityCombo.options[identityCombo.selectedIndex].text.match("Participant")) {
                    taxiContract.methods.approveDriver().send({from: acc}).then((res, err) => {
                        document.getElementById("errorField-7").innerHTML="";
                        var approvedNum = parseInt(document.getElementById("proposed-approval-state-driver").innerHTML);
                        document.getElementById("proposed-approval-state-driver").innerHTML = approvedNum + 1;
                    }).catch(err => {
                        document.getElementById("errorField-7").innerHTML= "Cannot approve the proposed driver.";
                    });
                } else {
                    document.getElementById("errorField-7").innerHTML= "Only participants can approve.";
                }
            }
        });
    });

    $("#approve-car-repurchase").click(function() {
        var identityCombo = document.getElementById("identity-combobox");
        var acc = identityCombo.options[identityCombo.selectedIndex].value;
        taxiContract.methods.getProposedRepurchaseCar().call().then((result, error) => {
            if (result[0] == noAddr) {
                document.getElementById("errorField-7").innerHTML= "There is no proposed repurchase exist.";
            } else {
                if (identityCombo.options[identityCombo.selectedIndex].text.match("Participant")) {
                    taxiContract.methods.approveSellProposal().send({from: acc}).then((res, err) => {
                        document.getElementById("errorField-15").innerHTML="";
                        var approvedNum = parseInt(document.getElementById("repurchase-car-approval-state").innerHTML);
                        document.getElementById("repurchase-car-approval-state").innerHTML = approvedNum + 1;
                    }).catch(err => {
                        document.getElementById("errorField-15").innerHTML= "Cannot approve the proposed repurchase.";
                    });
                } else {
                    document.getElementById("errorField-15").innerHTML= "Only participants can approve.";
                }
            }
        });
    });

    $("#purchase-car-button").click(function() {
        var identityCombo = document.getElementById("identity-combobox");
        var acc = identityCombo.options[identityCombo.selectedIndex].value;
        var dateComp = document.getElementById("dateField").innerHTML.split(".");
        var date =  new Date(parseInt(dateComp[2]), parseInt(dateComp[1]) - 1, parseInt(dateComp[0]));
        taxiContract.methods.purchaseCar(date.getTime()).send({from: acc, gas:3000000}).then((res, err) => {
            document.getElementById("errorField-5").innerHTML="";
            fillApprovedCar(taxiContract);
            // update table
            createOptions(taxiContract, accounts)
            // update contract
            getOtherBalances(taxiContract);
        }).catch(err => {
            document.getElementById("errorField-5").innerHTML= "Cannot purchase the car.";
        });
    });

    $("#repurchase-car-button").click(function() {
        var identityCombo = document.getElementById("identity-combobox");
        var acc = identityCombo.options[identityCombo.selectedIndex].value;
        var dateComp = document.getElementById("dateField").innerHTML.split(".");
        var date =  new Date(parseInt(dateComp[2]), parseInt(dateComp[1]) - 1 , parseInt(dateComp[0]));
        taxiContract.methods.getProposedRepurchaseCar().call((err, proposedCar) => {
            if (parseInt(proposedCar[2]) >= date.getTime()) {
                taxiContract.methods.repurchaseCar().send({from: acc}).then((res, err) => {
                    document.getElementById("errorField-6").innerHTML="";
                    fillApprovedCar(taxiContract);
                    // update table
                    createOptions(taxiContract, accounts)
                    // update contract
                    getOtherBalances(taxiContract);
                }).catch(err => {
                    document.getElementById("errorField-6").innerHTML= "Cannot repurchase the car.";
                });
            } else {
                document.getElementById("errorField-6").innerHTML= "Approve time has passed.";
            }
        });
    });

    $("#propose-repurchase-car-button").click(function() {
        var identityCombo = document.getElementById("identity-combobox");
        var acc = identityCombo.options[identityCombo.selectedIndex].value;

        var idOptions = identityCombo.options;

        var popup = document.getElementById("popup");

        var popupContent = document.getElementById("popup-content");

        popupContent.innerHTML = "";

        var carInfo = document.createElement("div");
        carInfo.innerHTML = "Fill the car information.";
        carInfo.classList.add("popup-description");

        var applyButton =  document.createElement("button");
        applyButton.classList.add("applyButton");
        applyButton.id = "applyButton";
        applyButton.innerHTML = "OK";
        applyButton.onclick = function() {
            var inputTime = new Date(document.getElementById("popup-repurchase-car-date").value);
            taxiContract.methods.repurchaseCarPropose(document.getElementById("popup-repurchase-car-price").value, inputTime.getTime())
                .send({from: acc, gas:3000000}).then((res, err) => {
                document.getElementById("errorField-6").innerHTML="";
                popup.style.display = "none";
                fillRepurchaseCar(taxiContract);
                createOptions(taxiContract, accounts);
            }).catch(err => {
                popup.style.display = "none";
                document.getElementById("errorField-6").innerHTML= "Only car dealer can call this function.";
                console.log(err);
            });
        };
        var cancelButton =  document.createElement("button");
        cancelButton.classList.add("cancelButton");
        cancelButton.id = "cancelButton";
        cancelButton.innerHTML = "Cancel";
        cancelButton.onclick = function() {
            popup.style.display = "none";
        };

        popupContent.appendChild(carInfo);

        //car information
        var pairContainer1 = document.createElement("div");
        pairContainer1.classList.add("popup-car-info-pair");
        var carPriceLabel = document.createElement("div");
        carPriceLabel.classList.add("popup-car-info-label");
        carPriceLabel.innerHTML = "Car Price";
        var carPriceInput = document.createElement("input");
        carPriceInput.classList.add("popup-car-info-input");
        carPriceInput.type = "number";
        carPriceInput.min = "0";
        carPriceInput.id = "popup-repurchase-car-price";
        pairContainer1.appendChild(carPriceLabel);
        pairContainer1.appendChild(carPriceInput);
        popupContent.appendChild(pairContainer1);

        var pairContainer2 = document.createElement("div");
        pairContainer2.classList.add("popup-car-info-pair");
        var carTimeLabel = document.createElement("div");
        carTimeLabel.classList.add("popup-car-info-label");
        carTimeLabel.innerHTML = "Offer Valid Time";
        var carTimeInput = document.createElement("input");
        carTimeInput.classList.add("popup-car-info-input");
        carTimeInput.type = "date";
        carTimeInput.valueAsDate = new Date();
        carTimeInput.id = "popup-repurchase-car-date";
        pairContainer2.appendChild(carTimeLabel);
        pairContainer2.appendChild(carTimeInput);
        popupContent.appendChild(pairContainer2);

        var buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");
        buttonContainer.appendChild(applyButton);
        buttonContainer.appendChild(cancelButton);
        popupContent.appendChild(buttonContainer);

        popup.style.display = "block";
    });

    $("#hire-driver-button").click(function() {
        var identityCombo = document.getElementById("identity-combobox");
        var acc = identityCombo.options[identityCombo.selectedIndex].value;
        taxiContract.methods.setDriver().send({from: acc}).then((res, err) => {
            document.getElementById("errorField-9").innerHTML="";
            fillHiredDriver(taxiContract);
            // update table
            createOptions(taxiContract, accounts)
        }).catch(err => {
            document.getElementById("errorField-9").innerHTML= "Cannot hire the driver.";
        });
    });

    $("#fire-driver-button").click(function() {
        var identityCombo = document.getElementById("identity-combobox");
        var acc = identityCombo.options[identityCombo.selectedIndex].value;
        taxiContract.methods.fireDriver().send({from: acc}).then((res, err) => {
            document.getElementById("errorField-10").innerHTML="";
            fillHiredDriver(taxiContract);
            // update table
            createOptions(taxiContract, accounts)
        }).catch(err => {
            document.getElementById("errorField-10").innerHTML= "Cannot fire the driver.";
        });
    });

    $("#get-charge-button").click(function() {
        // display pop up to get the charge value
        var popup = document.getElementById("popup");
        var popupContent = document.getElementById("popup-content");
        popupContent.innerHTML = "";
        var info = document.createElement("div");
        info.innerHTML = "Please enter the charge.";
        info.classList.add("popup-description");

        var applyButton =  document.createElement("button");
        applyButton.classList.add("applyButton");
        applyButton.id = "applyButton";
        applyButton.innerHTML = "OK";
        applyButton.onclick = function() {
            taxiContract.methods.getCharge().send({value: document.getElementById("popup-charge").value, from: accounts[0]}).then((res, err) => {
                document.getElementById("errorField-11").innerHTML="";
                getOtherBalances(taxiContract);
                popup.style.display = "none";
            }).catch(err => {
                document.getElementById("errorField-11").innerHTML= "Error on charge transfer.";
            });
        };
        var cancelButton =  document.createElement("button");
        cancelButton.classList.add("cancelButton");
        cancelButton.id = "cancelButton";
        cancelButton.innerHTML = "Cancel";
        cancelButton.onclick = function() {
            popup.style.display = "none";
        };

        popupContent.appendChild(info);

        //charge
        var pairContainer = document.createElement("div");
        pairContainer.classList.add("popup-car-info-pair");
        var chargeLabel = document.createElement("div");
        chargeLabel.classList.add("popup-car-info-label");
        chargeLabel.innerHTML = "Charge";
        var chargeInput = document.createElement("input");
        chargeInput.classList.add("popup-car-info-input");
        chargeInput.type = "number";
        chargeInput.min = "0";
        chargeInput.id = "popup-charge";

        pairContainer.appendChild(chargeLabel);
        pairContainer.appendChild(chargeInput);
        popupContent.appendChild(pairContainer);

        var buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");
        buttonContainer.appendChild(applyButton);
        buttonContainer.appendChild(cancelButton);
        popupContent.appendChild(buttonContainer);

        popup.style.display = "block";
    });

    $("#forward-button").click(function() {
        d.setMonth(d.getMonth() + 1);
        document.getElementById("dateField").innerHTML = d.toLocaleDateString();
        document.getElementById("timeField").innerHTML = d.toLocaleTimeString();
        // we assume that each month 150 ether is earned

        taxiContract.methods.getCharge().send({value: 150, from: accounts[0]}).then((res, err) => {
             getOtherBalances(taxiContract);
         }).catch(err => {
             console.log(err);
         });
    });

    $("#forward-button-six").click(function() {
        d.setMonth(d.getMonth() + 6);
        document.getElementById("dateField").innerHTML = d.toLocaleDateString();
        document.getElementById("timeField").innerHTML = d.toLocaleTimeString();
        // we assume that each month 150 ether is earned

        taxiContract.methods.getCharge().send({value: 6 * 150, from: accounts[0]}).then((res, err) => {
             getOtherBalances(taxiContract);
         }).catch(err => {
             console.log(err);
         });
    });

    $("#pay-salary-button").click(function() {
        taxiContract.methods.getLastSalaryPaid().call().then((lastPaidDate) => {
            var lastPaidDateInDate = new Date(parseInt(lastPaidDate));
            var currentDate = d;
            var testDate = new Date(parseInt(lastPaidDate));
            testDate.setMonth(lastPaidDateInDate.getMonth() + 1);
            if (lastPaidDate == 0 ||  (currentDate.getTime() >= testDate.getTime())) {
                var identityCombo = document.getElementById("identity-combobox");
                var acc = identityCombo.options[identityCombo.selectedIndex].value;
                taxiContract.methods.releaseSalary(d.getTime()).send({from: acc}).then(() => {
                    createOptions(taxiContract, accounts);
                    getOtherBalances(taxiContract);
                    document.getElementById("errorField-12").innerHTML="";
                }). catch((err) => {
                    console.log(err);
                    document.getElementById("errorField-12").innerHTML= "Payment failed.";
                });
            } else {
                document.getElementById("errorField-12").innerHTML= "Too early to pay the driver's salary.";
            }
        });
    });

    $("#pay-expenses-button").click(function() {
        taxiContract.methods.getLastExpensesPaid().call().then((lastPaidDate) => {
            var lastPaidDateInDate = new Date(parseInt(lastPaidDate));
            var currentDate = d;
            var testDate = new Date(parseInt(lastPaidDate));
            testDate.setMonth(lastPaidDateInDate.getMonth() + 6);
            if (lastPaidDate == 0 ||  (currentDate.getTime() >= testDate.getTime())) {
                var identityCombo = document.getElementById("identity-combobox");
                var acc = identityCombo.options[identityCombo.selectedIndex].value;
                taxiContract.methods.carExpenses(d.getTime()).send({from: acc}).then(() => {
                    createOptions(taxiContract, accounts);
                    getOtherBalances(taxiContract);
                    document.getElementById("errorField-13").innerHTML="";
                }). catch((err) => {
                    console.log(err);
                    document.getElementById("errorField-13").innerHTML= "Payment failed.";
                });
            } else {
                document.getElementById("errorField-13").innerHTML= "Too early to pay the expenses.";
            }
        });
    });

    $("#pay-dividend-button").click(function() {
        taxiContract.methods.getLastDividenedPaid().call().then((lastPaidDate) => {
            var lastPaidDateInDate = new Date(parseInt(lastPaidDate));
            var currentDate = d;
            var testDate = new Date(parseInt(lastPaidDate));
            testDate.setMonth(lastPaidDateInDate.getMonth() + 6);
            if (lastPaidDate == 0 ||  (currentDate.getTime() >= testDate.getTime())) {
                var identityCombo = document.getElementById("identity-combobox");
                var acc = identityCombo.options[identityCombo.selectedIndex].value;
                taxiContract.methods.payDividend(d.getTime()).send({from: acc, gas:3000000}).then(() => {
                    createOptions(taxiContract, accounts);
                    getOtherBalances(taxiContract);
                    document.getElementById("errorField-14").innerHTML="";

                }). catch((err) => {
                    console.log(err);
                    document.getElementById("errorField-14").innerHTML= "Payment failed.";
                });
            } else {
                document.getElementById("errorField-14").innerHTML= "Too early to pay the dividened.";
            }
        });
    });

    $("#get-dividend-participant-button").click(function() {
        var identityCombo = document.getElementById("identity-combobox");
        var acc = identityCombo.options[identityCombo.selectedIndex].value;
        taxiContract.methods.getDivindend().send({from: acc}).then(() => {
             createOptions(taxiContract, accounts);
             document.getElementById("errorField-15").innerHTML="";
        }). catch((err) => {
                console.log(err);
                document.getElementById("errorField-15").innerHTML= "Payment failed.";
        });
    });
})();

function fillProposedCar(taxiContract) {
    taxiContract.methods.getProposedCar().call().then((result, error) => {
        document.getElementById("proposed-id").innerHTML = result[0];
        document.getElementById("proposed-price").innerHTML = result[1];
        if (parseInt(result[2]) !== 0) {
            var date = new Date(parseInt(result[2]));
            document.getElementById("proposed-time").innerHTML = date.toLocaleDateString();
        } else {
            document.getElementById("proposed-time").innerHTML = "-";
        }
        document.getElementById("proposed-approval-state").innerHTML = result[3];
    });
}
function fillProposedDriver(taxiContract) {
    taxiContract.methods.getProposedDriver().call().then((result, error) => {
        document.getElementById("proposed-driver-id").innerHTML = result[0];
        document.getElementById("proposed-driver-salary").innerHTML = result[1];
        document.getElementById("proposed-approval-state-driver").innerHTML = result[2];
    });
}

function fillRepurchaseCar(taxiContract) {
    taxiContract.methods.getProposedRepurchaseCar().call().then((result, error) => {
        console.log(result);
        document.getElementById("repurchase-car-id").innerHTML = result[0];
        document.getElementById("repurchase-car-price").innerHTML = result[1];
        if (parseInt(result[2]) !== 0) {
            var date = new Date(parseInt(result[2]));
            document.getElementById("repurchase-car-time").innerHTML = date.toLocaleDateString();
        } else {
            document.getElementById("repurchase-car-time").innerHTML = "-";
        }
        document.getElementById("repurchase-car-approval-state").innerHTML = result[3];
    });
}

function fillApprovedCar(taxiContract) {
    taxiContract.methods.getOwnedCar().call().then((result, error) => {
        document.getElementById("approved-id").innerHTML = result[0];
    });
}

function fillHiredDriver(taxiContract) {
    taxiContract.methods.getDriverObj().call().then((hiredDriver) => {
        document.getElementById("approved-driver-id").innerHTML = hiredDriver[0];
        document.getElementById("approved-driver-salary").innerHTML = hiredDriver[1];
    });
}

function getOtherBalances(taxiContract) {
    // get contract's balance
    taxiContract.methods.getContractBalance().call().then((bal, err) => {
        document.getElementById("contract-balance").innerHTML = bal;
    });
}

function createOptions(taxiContract, accounts) {
    // get car dealer
    taxiContract.methods.getCarDealer().call().then((carDealer) => {
       if (!(carDealer === noAddr)) {
            carDealerAddr = carDealer;
       }
       taxiContract.methods.getProposedDriver().call().then((proposedDriver) => {

            // get driver
           taxiContract.methods.getDriver().call().then((driver) => {
                if (!(driver === noAddr)) {
                   driverAddr = driver;
                }
                // get participants
                taxiContract.methods.getParticipants().call().then((participantList, err) => {
                    participantList.forEach(function (part, index) {
                       if (!joinedParticipants.includes(part)) {
                            joinedParticipants.push(part);
                       }
                    });
                    var  identityCombobox = document.getElementById("identity-combobox");
                    var selectedInd = identityCombobox.selectedIndex;
                    clearCombobox(identityCombobox);

                    var managerOption = document.createElement("option");
                    managerOption.text = "Manager";
                    managerOption.value = accounts[0];
                    participantAccount[accounts[0]] = managerOption.text;

                    identityCombobox.add(managerOption, 0);

                    for (var i = 1; i < accounts.length; i++) {
                        var option = document.createElement("option");
                        if (joinedParticipants.includes(accounts[i])) {
                            option.text = "Participant " + (i);
                        } else if (accounts[i] === carDealerAddr) {
                            option.text = "Car Dealer";
                        } else if (accounts[i] === driverAddr) {
                            option.text = "Driver";
                        } else if (accounts[i] === proposedDriver[0]) {
                            option.text = "Proposed Driver";
                        } else {
                            option.text = "Person " + (i);
                        }

                        option.value = accounts[i];
                        participantAccount[accounts[i]] = option.text;
                        identityCombobox.add(option);
                    }

                    if (selectedInd === -1) {
                        identityCombobox.selectedIndex = 0;
                    } else {
                        identityCombobox.selectedIndex = selectedInd;
                    }
                    getParticipants(taxiContract, participantList, carDealer, driver);
                });
           });
       });
    });
}

function clearCombobox(combo) {
    var length = combo.options.length;
    for (i = length-1; i >= 0; i--) {
      combo.options[i] = null;
    }
}

function getParticipants(taxiContract, participantAddrList, carDealerAddr, driverAddr) {
    $("#participants-table tr").remove();

    var  participantTable = document.getElementById("participants-table");

    var newHeaderRow = participantTable.insertRow();
    newHeaderRow.id = "participant-header-row";
    var first_header_cell  = newHeaderRow.insertCell(0);
    first_header_cell.appendChild(document.createTextNode('Name'));

    var second_header_cell  = newHeaderRow.insertCell(1);
    second_header_cell.appendChild(document.createTextNode('Balance'));

    var third_header_cell = newHeaderRow.insertCell(2);
    third_header_cell.appendChild(document.createTextNode('Account Address'));

    // get car dealer
    if (!(carDealerAddr === noAddr)) {
        taxiContract.methods.getCarDealerBalance().call().then((balance) => {
           var newRow = participantTable.insertRow();
           newRow.insertCell(0).appendChild(document.createTextNode("Car Dealer"));
           newRow.insertCell(1).appendChild(document.createTextNode(balance));
           newRow.insertCell(2).appendChild(document.createTextNode(carDealerAddr));
        });
    }

    // get driver
    if (!(driverAddr === noAddr)) {
        taxiContract.methods.getDriverBalance().call().then((balance) => {
          var newRow = participantTable.insertRow();
          newRow.insertCell(0).appendChild(document.createTextNode("Driver"));
          newRow.insertCell(1).appendChild(document.createTextNode(balance));
          newRow.insertCell(2).appendChild(document.createTextNode(driverAddr));
        });
    }

    // get participants
    joinedParticipants.forEach(function (part, index) {
        taxiContract.methods.getParticipantBalance(part).call().then((participantsBalance, err) => {
            var newRow = participantTable.insertRow();
            newRow.insertCell(0).appendChild(document.createTextNode(participantAccount[part]));
            newRow.insertCell(1).appendChild(document.createTextNode(participantsBalance));
            newRow.insertCell(2).appendChild(document.createTextNode(part));
        });
    });
}