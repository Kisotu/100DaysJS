// Nested Loops and scope
// program that prints each combination of 2 dice rolls


// outer loop
for(let i=1; i<=6;i++){
    // inner loop
    for(let j=1;j<=6;j++){
        console.log("i:"+i +" " + "j:"+ " "+ j);
    }
}

// nested loop to print a tic tac toe board 2D array board

let board = [["X","O","X"],["O","X","O"],["X","O","X"]];

for(let i=0; i<board.length; i++){
    let row = board[i]; //get the ith row
    let line = ""; //initialize an empty string

    for(let j=0; j<row.length; j++){
        line += row[j] + ""; // append the jth element and a space to the string
        // inner loop
    }
    console.log(line)

    // outer loop
}


// loop to compare elements inside two different arrays

// first array
const firstArray = [6, 19, 56, 79, 34];

// second array

const secondArray = [81, 65, 34, 6, 7];

for(let i=0; i<firstArray.length; i++){
    for(let j=0; j<secondArray.length; j++){
        if(firstArray[i] === secondArray[j]){
            console.log("Both loops have the number: " + firstArray[i]);
        }
        // inner loop compares the number at the current iteration of the outer loop against numbers of the second array
    }
}

// Loop that prints all possible combinations of two arrays

const arr1 = ["a", "b", "c", "d", "e"];
const arr2 = [4,3,1];

for(let i = 0; i<arr1.length; i++){
    for(let j = 0; j<arr2.length; j++){
        console.log(arr1[i] + arr2[j])
    }
}