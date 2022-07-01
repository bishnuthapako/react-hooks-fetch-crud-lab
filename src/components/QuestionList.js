import React from "react";

function QuestionList({question}) {
  // console.log(question, "result")

 const viewQuestion = question.map((page, index)=>(<li key={index}>{page.prompt}</li>))
//  console.log(viewQuestion , "res")

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
     {viewQuestion}
      </ul>
    </section>
  );
}

export default QuestionList;
