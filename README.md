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
## UVA11417：GCD 
```c
#include <stdio.h>
int GCD(int i, int j){
	if(i==0){
		return j;
	}
	else {
		return GCD(j%i,i);
	}
}
int main()
{
	int N,G;
	scanf("%d",&N);
	while(N){
		G=0;
		for(int i=1;i<N;i++){	
			for(int j=i+1;j<=N;j++)
			{
      			G+=GCD(i,j);
			}
		}
		printf("%d\n",G);
		scanf("%d",&N);
	}
}
```
## 第四周
## 第1題 11677 時鐘問題(計算睡了多少分鐘)
```c
#include <stdio.h>

int main()
{
        int h1,m1,h2,m2;
        while(scanf("%d %d %d %d",&h1,&m1,&h2,&m2)!=EOF){
            if(h1==0 && m1==0 && h2==0 && m2==0) break;
            int t1,t2,sleeptime;
            t1 = h1*60+m1;
            t2 = h2*60+m2;
            if(t2-t1<0){
                sleeptime = t2+24*60-t1;
            }
            else{
                sleeptime = t2-t1;
            }
            printf("%d\n",sleeptime);
        }
}

```
## 第2題 UVA10929：You can say 11 
```c

```
## 第3題 UVA10071：Back to High School Physics 
```c
#include <stdio.h>
int main()
{
	int v,t;
	while(scanf("%d%d",&v,&t)!=EOF){
		printf("%d\n",2*v*t);
	}	
}
```
## 第4題 UVA10055：Hashmat the brave warrior 
```c
#include <stdio.h>
int main()
{
	long long a,b,temp;
	while(scanf("%lld%lld",&a,&b)!=EOF){
		if(a>b){
			temp=a;
			a=b;
			b=temp;
		}
		printf("%lld\n",b-a);
	}
}
```
## 第5題 UVA10035：Primary Arithmetic 
```c

```
