const path = require('path')
const fs = require('fs')

const filePathInput = path.join(__dirname, 'files', 'input.txt')
const filePathPattern = path.join(__dirname, 'files', 'patterns.txt')

fs.readFile(filePathInput, 'utf-8', (err, contentI) => {
	if (err) {
		throw err
	}
	console.log(contentI)

	fs.readFile(filePathPattern, 'utf-8', (err2, contentP) => {
			if (err2) {
				throw err2
			}

		const arr1 = contentI.toString().replace(/\r\n/g,'\n').split('\n');
		const arr2 = contentP.toString().replace(/\r\n/g,'\n').split('\n');

		let answer = []

    for(let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
        	if (arr1[i] === arr2[j]) {
        		answer.push(arr1[j])
        	}
        }
    }

    let answer2 = []

    for(let i in arr1) {
      for (let j in arr2) {
       	if (!arr1[i] == !arr2[j]) {
        	answer2.push(arr1[j])
        }
      }
      break
    }

    console.log(answer.toString())
    console.log(answer2.toString())
	})
})

