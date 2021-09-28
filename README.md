# ajian world

*我是阿尖*

![車車好好看XD](https://i.ytimg.com/vi/_6TtTRrno3E/maxresdefault.jpg)

```C
#include <stdio.h>
int main()
{
  printf("hello world");
}
```
## 大二 資料結構實務
## 第三周
## odd sum
```c
#include <stdio.h>
int main()
{
	int n,a,b;
	scanf("%d",&n);
	for(int i=0;i<n;i++){
		scanf("%d%d",&a,&b);
		int sum=0;
		for(int j=a;j<=b;j++){
			if(j%2!=0){
				sum+=j;
			}
		}
		printf("Case %d: %d\n", i+1,sum);
	}
}
```
## (UVA100) The 3n + 1 problem :
```c
// 方法一
int cycleLength(int n){
	int Length=1;
	while(n!=1){
		if(n%2==0){
			n=n/2;
			Length++;
		}
		else{
		 	n=3*n+1;
		 	Length++;
		}
	}
	return Length;
}
int main(void)
{
	int i,j,max,temp;
	while( scanf("%d%d",&i,&j)!=EOF){
		max=1;
		printf("%d %d ",i,j);
		if(i>j){
			temp =i;
			i=j;
			j=temp;
		}
		
		for(int n=i; n<=j;n++){
			int len=cycleLength(n);
			if( len>max ){
			max=len;
			}
		}
		printf("%d\n",max);
		
	}
}
```
```c
//第二種方法(能成功)
int cycleLength(int n){
	int Length=1;
	while(n!=1){
		if(n%2==0){
			n=n/2;
			Length++;
		}
		else{
		 	n=3*n+1;
		 	Length++;
		}
	}
	return Length;
}
int main(void)
{
	int i,j,max;
	while( scanf("%d%d",&i,&j)!=EOF){
		max=1;
		if(i>j){
			for(int n=j; n<=i;n++){
				int len=cycleLength(n);
				if( len>max ){
					max=len;
				}
			}
			printf("%d %d %d\n",i,j,max);
		}
		else{
			for(int n=i; n<=j;n++){
				int len=cycleLength(n);
				if( len>max ){
					max=len;
				}
			}
			printf("%d %d %d\n",i,j,max);
		}
	}
}
```
