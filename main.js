//Create initial note using the parameters below.
const notes = [
    {id: 1,
     text: "It is ok to not know...",
     author: "Faith Cox",
     date: "7/11/22",
     topics: ["Ask Questions", "Be Humble", "Break It" , "Set Goals"]
    }
]

//Use the push method to add 3 more notes to const notes
notes.push({   
    id: 2,
    text: "Think it BEFORE you code it",
    author: "Coding Lumos",
    date: "7/11/22",
    topics: ["Think about it", "Write it Out", "Talk to the Duck" , "Talk to the Duck again"]
   },
   {   
    id: 3,
    text: "Write Code to Solve the Problem",
    author: "Coding Lumos",
    date: "7/11/22",
    topics: ["Code under EACH comment", "Use Proper Punctuation", "When in Doubt Ask" , "Make sure the Order makes Sense", "Repeat"]
   },
   {   
    id: 4,
    text: "Things to Remember",
    author: "Coding Lumos",
    date: "7/11/22",
    topics: ["Array is a set of data", "String is words/letters", "Numbers are numbers" , "For/of loops repeat"]
   })

   //Start with a heading called ALL Note Topics
   //console.log("*** All Note Topics ***")

   // Need to count up all the topics, so start at 0
   //let totalTopics = 0
   
   //Iterate the array to display only the test of each note section
   //Iterate all of the notes
//Increase the value of `totalTopics` by the number of topics on this note
    //totalTopics = totalTopics + }
// Calculate the overall average   
// Output the average to the terminal
   //for (const note of notes) {
        //console.log(note.text)
        //console.log(`${totalTopics}`) 
       // totalTopics = totalTopics + note.topics.length
        //console.log(totalTopics)}
//Start with a Heading for the Average Topics Per Note
   //console.log("*** Average Topics Per Note ***")
 //Iterate the array to display the average topics in all the notes listed above
//const averageTopic = totalTopics / notes.length
//console.log(averageTopic)

/*Create a new variable called filteredNotes with an empty array as its initial value.
Create a new variable called criteria the contains a string of the topic by which you want to filter the notes.*/

let filteredNotes = []
let criteria = "Repeat"
//Then you iterate the notes array and check if the criteria is in the topics array property. You can use the .includes() method that you used in a previous exercise (professionals go back to old code for review and do not rely on memory). If the array does contain the criteria, add the current object to the filteredNotes array.
for (const note of notes) {
 if (note.topics.includes(criteria)) {
    filteredNotes.push(note)
    
 }
 
}
//After you are done iterating, use console.log() to output the new array containing the notes you found.
console.log(filteredNotes)


console.log("***  Note Articles  ***")

let allHTML = ""

for (const note of notes) {
    const article = `<article>${note.text}`
    allHTML += article
    for (const topic of note.topics) {
        const section = `<section>${topic}</section>` 
        allHTML += section  
 }
 allHTML += `</article>` 

}


 console.log(allHTML)




/*
Here are the first requirements for this project:
-You need to store many notes for a user in a collection.
-Each note needs to store the following information.
    -The note of the text
    -The author of the note
    -The date the note was entered
    -The category of the note
A note can be assigned any number of topics. For example:
    "task"
    "observation"
    "code"
    "learning"
    "feelings"
    etc...
Beginning Algorithm Comments
Given those requirements, here is how each would be described by a professional developer:

Define a variable named `notes` and assign a value of an empty array
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.

Why do developers do this? The two main reasons are:
    -Reflecting on the problem and writing comments saves time. If you start with code, without thinking it through, you waste large amounts of time in the long run.
    -When you come back and look at this code again in the future, there is a ready-made explanation for the code. Again, this saves large amounts of time for "future you".

***Since you are a beginner, you must start with algorithm development with comments before you write code.

Faith's Notes:
To see your workspace and create a new folder input the following into your terminal: 
    -cd
    -cd workspace
    -mkdir daily-notes
    -cd daily-notes
    -touch main.js
    -code .

To add more items into an array you use the PUSH method. This pushes what you want into the array and adds them to the end of the array in order of how you add them.
Don't be too proud to look at old code, ask for help, or Google it!

Example:
notes.push({
    id: 4,
    topics: [ "strategy", "professional", "help" ],
    text: "Review all my old code before asking for help or looking at hints.",
    author: "Samantha Maas",
    date: "2020-11-09"
})

notes.push({
    id: 5,
    topics: [ "thinking" ],
    text: "I have found that slowing down and thinking about the problem, and writing out the comments makes it vastly easier to write code.",
    author: "Gib Jeffries",
    date: "2021-01-18"
})

notes.push({
    id: 6,
    topics: [ "reminder", "github" ],
    text: "Need to have all my code backed up to Github by the end of the week.",
    author: "Rebecca Parker",
    date: "2021-02-25"
})
*/