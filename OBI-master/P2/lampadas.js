scanf("%d","lamp1");
scanf("%d","lamp2");
scanf("%d","lampfinal1");
scanf("%d","lampfinal2");
var cliques=0;
if(lamp2!=lampfinal2)
{
	cliques++;
   if(lamp1==0)
   {
      lamp1=1; 
   }else{
   lamp1=0;
   }
}
if(lamp1==lampfinal1)
{
printf("%d",cliques);	
}
else
{
printf("%d",cliques+1);
}
