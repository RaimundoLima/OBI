scanf("%d","posicoes");
scanf("%d","inimigo");
scanf("%d","nave");
if(nave<inimigo)
{
	printf("%d",inimigo-nave);	
}
else
{
	printf("%d",posicoes-nave+inimigo);		
}
