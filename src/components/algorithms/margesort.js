// let speed = 0.1;
const sleep = ms => new Promise(r => setTimeout(r, ms));

export default async function margesort(values,speed){
    
    console.log(speed);

    console.log("marge sort")

    var ids = values.map((val,idx) => idx);


    async function marge(low,high){

        for(let i = low ; i <= high ; i++) 
        document.getElementById(ids[i]).style.backgroundColor = "black";

        var temp_values1 = []
        var temp_values2 = []

        var temp_ids1 = []
        var temp_ids2 = []

        const mid = Math.floor((low + high) / 2);

        for(let k = low ; k <= mid ; k++){
            temp_values1.push(values[k]);
            temp_ids1.push(ids[k]);
        }

        for(let k = mid+1 ; k <= high ; k++){
            temp_values2.push(values[k]);
            temp_ids2.push(ids[k]);
        }

        temp_values1.push(Number.MAX_VALUE);
        temp_values2.push(Number.MAX_VALUE);

        var i = 0;
        var j = 0;
        var k = low;

        while(i < temp_values1.length - 1 || j < temp_values2.length - 1){
           
            if(temp_values1[i] < temp_values2[j]){

                values[k] = temp_values1[i];
                ids[k] = temp_ids1[i];
                i++;
                k++;

            }
            else{

                values[k] = temp_values2[j];
                ids[k] = temp_ids2[j];
                j++;
                k++;

            }

           

        }


        for(let i = low ; i <= high ; i++)
            document.getElementById(ids[i]).style.transform = `translateX(${i*10}px)`;
           
        
        
        
        await sleep(speed * 1000);

        for(let i = low ; i <= high ; i++) 
           document.getElementById(ids[i]).style.backgroundColor = "rgb(0, 149, 199)";


    }

     
    async function margesortutill(i,j){

        // console.log(`(${i} + ${j})`)

        if(i >= j) return;
        var mid = Math.floor((i+j) / 2);
        await margesortutill(i,mid);
        await margesortutill(mid+1,j);
        await marge(i,j);



    }

  let n = values.length;

  await margesortutill(0,n-1);

//   console.log(values);
  
}

