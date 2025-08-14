const store = new Map([
    ["Dr. Docile","Jesus changes the life"],
    ["Dr. Paul Thomson","The purposive life"],
    ["Pr. Jean","Hope and Future"],
    ["Dr. Enstenien","Relativism"]
]);

// update an author

store.set("Dr. Paul Thomson","the commitment and devotion");
// count the size of store
const size = store.size;
console.log(size)
console.log(store)