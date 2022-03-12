function gen_table(){
    document.getElementById("tab").innerHTML="";
    let capital=Number(document.getElementById("capital").value);
    let couta=Number(document.getElementById("couta").value);
    let interes=Number(document.getElementById("interes").value);
    var arreglo = ["capital","cuota","interes"];
    if(capital>0){   
        for(i=1;i<=couta;i++){
            ca=capital/couta;
            d1=ca.toFixed(2);
            i2=((capital*interes)/100)/couta;
            d2=i2.toFixed(2);
            r=ca+i2;
            d3=r.toFixed(2);
            document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
                    `<tr>
                        <td> ${i}</td>
                        <td> ${d1}</td>
                        <td> ${d2}</td>
                        <td> ${d3}</td>
                    </tr>`;
        }
        n1=capital.toFixed(2);
        t_i=i2*couta;
        d4=t_i.toFixed(2);
        t_p=r*couta;
        d5=t_p.toFixed(2);
        document.getElementById("t1").innerHTML=n1;
        document.getElementById("t2").innerHTML=d4;
        document.getElementById("t3").innerHTML=d5;  
        console.log(arreglo);     
    }else{
        alert("Falta ingresar un Número");
    }
}