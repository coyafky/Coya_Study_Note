var obj = {a: 1, b: 2, c: 3};
    var entries = Object.entries(obj);

    for (var i = 0; i < entries.length; i++) {
        console.log("obj." + entries[i][0] + " = " + entries[i][1]);
    }
    

// obj.a = 1
// obj.b = 2
// obj.c = 3