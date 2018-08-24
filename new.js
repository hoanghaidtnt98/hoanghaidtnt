var cong1= document.getElementById('cong1');
var tru1= document.getElementById('tru1');
var cong= document.getElementById('cong');
var tru= document.getElementById('tru');
var total= document.getElementById('total');
var total1= document.getElementById('total1');
var quantity= document.getElementById('quantity');
var quantity1= document.getElementById('quantity1');
var quan= parseInt(quantity.innerHTML);
var quan1=parseInt(quantity1.innerHTML);
var ftotal= document.getElementById('totalfull');
ftotal.innerHTML='Total $'+0;
function chen(){
	var tong= (parseFloat(total.innerHTML) + parseFloat(total1.innerHTML)).toFixed(2);
	if (tong=='NaN')
	{
		if(total.innerHTML=='') ftotal.innerHTML='Total $'+total1.innerHTML;
		else ftotal.innerHTML='Total $'+total.innerHTML;
	}
	else ftotal.innerHTML='Total $'+tong;
}

cong.addEventListener('click',function(){
		quantity.innerHTML=++quan;
		total.innerHTML= (7.95*quan).toFixed(2);
		chen();
	})

tru.addEventListener('click',function(){
		if(quan>0){
		quantity.innerHTML=--quan;
		total.innerHTML= (7.95*quan).toFixed(2);
		chen();
		}
		else alert("số lượng không thể âm");
	})
cong1.addEventListener('click',function(){
		quantity1.innerHTML=++quan1;
		total1.innerHTML= (59.95*quan1).toFixed(2);
		chen();
	})

tru1.addEventListener('click',function(){
		if(quan1>0){
		quantity1.innerHTML=--quan1;
		total1.innerHTML= (59.95*quan1).toFixed(2);
		chen();
		}
		else alert("số lượng không thể âm");
	})

	