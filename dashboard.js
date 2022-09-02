let data = JSON.parse(localStorage.getItem('book-list'));
console.log(data,"data")

data.map((el)=>{

    var row =document.createElement("tr");
        
        var td1 =document.createElement("td");
        td1.textContent = `${el.Book_name}`;
        var td2 =document.createElement("td");
        td2.textContent = `${el.Author_Name}`;
        var td3 =document.createElement("td");
        td3.textContent = `${el.Book_Description}`;
        var td4 =document.createElement("td");
        td4.textContent = `${el.Add_Dates}`;
        var td5 =document.createElement("td");
        td5.textContent = `${el.Select_Category}`;
        var td6 =document.createElement("td");
        td6.textContent = `${el.Books_Price}`;
        var td7 =document.createElement("button");
        var count=0;
        count++;
        var res=document.getElementById("book-count")
        res.innerHTML=count

        
        var td8 =document.createElement("button");
        td7.textContent = "Buy";
        td7.style.backgroundColor="green"
        td7.addEventListener("click", BuyBook);
        td8.textContent="Add"
        td8.style.backgroundColor="red"
        td8.addEventListener("click", Desbook);
        row.append(td1, td2, td3, td4,td5, td6,td7,td8);
        document.querySelector("tbody").append(row);
    console.log(el)
    
        function BuyBook(){
            localStorage.setItem('buy-list', JSON.stringify(data));
            }
        
            function Desbook(){
                localStorage.setItem('bookmark-list', JSON.stringify(data));
            }

     var index, table = document.getElementById('table');
     for(var i=0;i<table.rows.length;i++){
        table.rows[i].cells[6].onclick = function()
        {
            index=this.parentElement.rowIndex;
            table.deleteRow(index)
            console.log(index)
        }
     }       
})