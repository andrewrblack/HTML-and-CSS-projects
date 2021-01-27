function myDictionary() {
    var Cat = {
        Hair:"Long",
        Color:"Orange",
        Age:"8",
    };
    delete Cat.Hair;
    document.getElementById("dictionary").innerHTML = Cat.Hair;
}

