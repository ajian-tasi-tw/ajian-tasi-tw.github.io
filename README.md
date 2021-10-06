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
//暫存
#include <stdlib.h>
int main()
{
	char n[1000],temp;
	int n1=0,n2=0,dp=0,dig;
	while(scanf("%s",n)){
		if(n==0) break;
		temp=n;
		while(n!=0){
			dig=n%10;
			if(dp%2==0) {
				n2+=dig;
			}
			else{
				n1+=dig;
			}
			dp++;
			n/=10;
		}
			if(abs(n1-n2)%11==0){
				printf("%s is a multiple of 11.\n",temp);
			}
			else{
				printf("%s is not a multiple of 11.\n",temp);
			}
		}
}
```
```c
///字串寫法
#include <stdio.h>
int main()
{
	while(1){
		char n[1001]={};
		int a=0,b=0;
		scanf("%s",n);
		if(n[0]=='0') break;
		for(int i=0;n[i];i+=2){
			a+=n[i]-48;
		}
		for(int i=1;n[i];i+=2){
			b+=n[i]-48;
		}
		if(abs(a-b)%11==0){
			printf("%s is a multiple of 11.\n",n);
		}
		else{
			printf("%s is not a multiple of 11.\n",n);
		}
	}
}
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
//老師解法
int main()
{
	int a,b;
	while( scanf("%d %d",&a,&b)!=EOF ){
		if( a==0 && b==0 )	break;
		int a1,b1,n=0,carry=0;
		a1=a%10;
		b1=b%10;
		while( !(a1==0 && b1==0) ){
			int c=a1+b1+carry;
			if(c>=10){
				carry=1;
				n++;
			}
			else{
				carry=0;
			}
			a/=10;
			b/=10;
			a1=a%10;
			b1=b%10;
		}
		if(n==0){
			printf("No carry operation.\n");
		}
		else if(n==1){
			printf("1 carry operation.\n");
		}
		else{
			printf("%d carry operations.\n",n);
		}
	}
	return 1;
}
```
```c
\\均宜解法
int main()
{
	while(1){
		int a,b,n=0,carry=0;
		scanf("%d %d",&a,&b);
		if( a==0 && b==0 )	
			break;
		while( a+b ){    //當a+b=0時會停止
			if(a%10+b%10+carry>=10){
				carry=1;
				n++;
			}
			else{
				carry=0;
			}
			a/=10;
			b/=10;
		}
		if(n==0){
			printf("No carry operation.\n");
		}
		else if(n==1){
			printf("1 carry operation.\n");
		}
		else{
			printf("%d carry operations.\n",n);
		}
	}
}
```
