nm=new Array();
nm[1]='ENE';
nm[2]='FEB';
nm[3]='MAR';
nm[4]='ABR';
nm[5]='MAY';
nm[6]='JUN';
nm[7]='JUL';
nm[8]='AGO';
nm[9]='SEP';
nm[10]='OCT';
nm[11]='NOV';
nm[12]='DIC';
function crono(){
	hoy=new Date();
	fhloc();
	for(cel=1;
		cel<act+1;
		cel++){
		if(fi[cel] != undefined && fi[cel].getTime()<=hoy.getTime()){
			if(fc[cel]!=null){
				a=document.getElementById('cel_'+cel);
				b=document.getElementById('cie_'+cel);
				dif=Math.floor((fc[cel].getTime()-hoy.getTime())/1000);
				if(dif>0){
					dias=Math.floor(dif/86400);
					hors=Math.floor((dif-(dias*86400))/3600);
					mins=Math.floor((dif-(dias*86400)-(hors*3600))/60);
					segs=dif-(dias*86400)-(hors*3600)-(mins*60);
					txt='';
					if(dias==1){
						txt+=dias+' d\xeda ';
					}
					if(dias>1){
						txt+=dias+' d\xedas ';
					}
					if(hors<10){
						txt+='0';
					}
					txt+=hors+':';
					if(mins<10){
						txt+='0';
					}
					txt+=mins+':';
					if(segs<10){
						txt+='0';
					}
					txt+=segs;
					a.innerHTML=txt;
					if(dias>1){
						a.style.color="#000000";
						a.style.backgroundColor="#00ff00";
					}
					if(dias<14){
						a.style.color="#000000";
						a.style.backgroundColor="#ffff00";
					}
					if(dias<5){
						a.style.color="#ffffff";
						a.style.backgroundColor="#ff0000";
					}
					b.style.color=a.style.color;
					b.style.backgroundColor=a.style.backgroundColor;
				}
				else{
					a.innerHTML="&oslash;";
					a.style.color="#000000";
					a.style.backgroundColor="#ffcccc";
					b.style.color=a.style.color;
					b.style.backgroundColor=a.style.backgroundColor;
				}
			}
		}
	}
}
function fhloc(){
	dd=hoy.getDate();
	mm=hoy.getMonth()+1;
	yy=hoy.getFullYear();
	hh=hoy.getHours();
	mi=hoy.getMinutes();
	ss=hoy.getSeconds();
	if(dd<10)dd='0'+dd;
	if(hh<10)hh='0'+hh;
	if(mi<10)mi='0'+mi;
	if(ss<10)ss='0'+ss;
	document.getElementById('fhoy').innerHTML=dd+'/'+nm[mm]+'/'+yy+' '+hh+':'+mi+':'+ss;
}