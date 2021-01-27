function myDictionary() {
    var Cat = { //defining Key Value Pairs
        Hair:"Long",
        Color:"Orange",
        Age:"8",
    };
    delete Cat.Hair; //deleting kvp 
    document.getElementById("dictionary").innerHTML = Cat.Hair;
} //output is undefinded because we deleted the kvp before it displayed

