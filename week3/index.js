var officeItems = ["stapler","monitor","computer","desk","lamp","computer","lamp","stapler","computer","computer"]

function countItemOnList(nameOfList, itemToBeSearched)
{

    var numberOfItems = 0;

    for (i=0; i < nameOfList.length; i++)
    {
       if (nameOfList[i] == itemToBeSearched)
       {
          numberOfItems = numberOfItems + 1;
       }
    }
    console.log("final count " + numberOfItems);
}
countItemOnList(officeItems, "computer");

var peopleWhoWantToSeeMadMaxFuryRoad = [
   {
      name: "mike",
      age: 12,
      gender: "male"
   },{
      name: "madeline",
      age: 80,
      gender: "female"
   },{
      name: "cheryl",
      age: 22,
      gender: "female"
   },{
      name: "sam",
      age:30,
      gender: "male"
   },{
      name: "suzy",
      age: 4,
      gender: "female"
   }
]
for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.age; i++){
   for(var j = 0; j <  peopleWhoWantToSeeMadMaxFuryRoad[i].age; j++){
        console.log (peopleWhoWantToSeeMadMaxFuryRoad[i][j])
   }
}
// this completely stumped me.

for(var i = 0; i <= 100; i += 2){
   console.log("even")
   
    
   
}