let databook = JSON.parse(localStorage.getItem('buy-list'));
console.log(databook,"data")

databook.map((el)=>{

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
        

        
        
        row.append(td1, td2, td3, td4,td5, td6);
        document.querySelector("tbody").append(row);
    console.log(el)
    
        
        
})