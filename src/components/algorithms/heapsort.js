const sleep = ms => new Promise(r => setTimeout(r, ms));

export default async function heapsort(values,speed){


    var ids = values.map((val,idx) => idx);


    async function swap(i,j){

                 document.getElementById(ids[i]).style.backgroundColor = 'black';
                 document.getElementById(ids[j]).style.backgroundColor = 'black';
                 

                 [values[i],values[j]] = [values[j],values[i]];
                 [ids[i],ids[j]] = [ids[j],ids[i]];

                 document.getElementById(ids[i]).style.transform = `translateX(${i*10}px)`; 
                 document.getElementById(ids[j]).style.transform = `translateX(${j*10}px)`; 

                 await sleep(speed * 1000);

                 document.getElementById(ids[i]).style.backgroundColor = "rgb(0, 149, 199)";
                 document.getElementById(ids[j]).style.backgroundColor = "rgb(0, 149, 199)";

    }

    
    async function heapify(N,i){

        let largest = i;
        let leftChild = 2 * i + 1;
        let rightChild = 2 * i + 2;

        if(leftChild < N && values[largest] < values[leftChild]) largest = leftChild;
        if(rightChild < N && values[largest] < values[rightChild]) largest = rightChild;

        if(largest !==  i){
            await swap(i,largest);
            await heapify(N,largest);
        }


    }

    let N = values.length;

    for(let i = Math.floor(N/2) - 1 ; i >= 0 ; i--){
        await heapify(N,i);
    }

    for(let i = N-1 ; i >= 0 ; i--){
        await swap(0,i);
        await heapify(i,0);
    }
 
  
}

