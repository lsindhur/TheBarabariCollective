import React from 'react'

const tableData = []; 
let count = 1;
for(let i=0; i<10; i++) {
  tableData[i] = []
  for(let j=0; j<10; j++) {
    tableData[i][j] = count++
  }
}

console.log(tableData)


//first iterating over tableData 10 times
//in each iteration, we are create 1 tr
//inside the tr, we are iterating again 
//over each sub array and creating tds

const App = () => {
  

  return (
    <div>
      <table>
        <tbody>
          {
            tableData.map(row => (
              <tr>
                {
                  row.map(cell => (
                    <td>{cell}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default App