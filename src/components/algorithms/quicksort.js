const sleep = ms => new Promise(r => setTimeout(r, ms));

export default async function quicksort(values,speed){


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

    async function partition(low,high){

        var pivot = values[high]; // pivot
        var i = (low - 1); 


        for (let j = low; j <= high - 1; j++) {
            
            if (values[j] < pivot) {
                 
                 i++;

                 await swap(i,j)

            }     

        }

        await swap(i+1,high);

        return (i + 1);

    }

     
    async function quicksortutill(i,j){

        if(i >= j) return;
        var mid = await partition(i,j);
        
        await quicksortutill(i,mid-1);
        await quicksortutill(mid+1,j);
   
    }

    let n = values.length;

    await quicksortutill(0,n-1);
  
}

