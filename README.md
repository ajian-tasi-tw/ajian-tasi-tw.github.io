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
## UVA10783 odd sum
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
## 第五周
## UVA10268：498' 
```c
#include <stdio.h>
#include <math.h>
int main()
{
	int n,x,sum,a[10000];
	while(scanf("%d",&x)!=EOF){
		for(n=0; ;n++){  //不能有int
			scanf("%d",&a[n]);
			if(getchar()=='\n') break; //當讀到\n這個字元就停止
		}
		
		sum=0;
		for(int i=0;i<n;i++){
			sum=sum+a[i]*(n-i)*(int)pow(x,n-i-1);
		}
		printf("%d\n",sum);
	}
} 
```

## UVA10812：Beat the Spread!
```C
#include <stdio.h>
int main()
{
	int n,a,b;
	scanf("%d",&n);
	for(int i=0;i<n;i++){
		scanf("%d %d",&a,&b);
		if(a<b || (a+b)%2==1){  //當a<b 和 答案是基數就不合
			printf("impossible\n");
		}
		else{
			printf("%d %d\n",(a+b)/2,(a-b)/2);
		}
	}
}
```
## 第六周
## UVA11063：B2-Sequence 
```c
#include <stdio.h>
int main()
{
	int n,m=1,b[100];
	while( scanf("%d",&n)!=EOF ){
		for(int i=0;i<n;i++){
			scanf("%d",&b[i]);
		}
		
		int s[n*n/2],se=0,c=0;
		
		for(int i=0;i<n-1;i++){
			if(b[i]>b[i+1]){
				se=1;
			}
		}
		
		for(int i=0;i<n;i++){
			for(int j=i;j<n;j++){
				s[c]=b[i]+b[j];
				c++;
			}
		}
		for(int i=0;i<c;i++){
			for(int j=i+1;j<c;j++){
				if(s[i]==s[j])
					se=1;
			}
		}
		
		if(se==1){
			printf("Case #%d: It is not a B2-Sequence.\n",m);
		}
		else{
			printf("Case #%d: It is a B2-Sequence.\n",m);
		}
		m++;
		printf("\n");
	}
}
```
## UVA11764：Jumping Mario 
```C
#include <stdio.h>
int b[100];
int main()
{
	int n;
	scanf("%d",&n);
	for(int k=1;k<=n;k++){
		int a,up=0,down=0;
		scanf("%d",&a);
		for(int i=0;i<a;i++){
			scanf("%d",&b[i]);
		}
		for(int i=0;i<a-1;i++){
			if(b[i]<b[i+1]){
				up++;
			}
			if(b[i]>b[i+1]){
				down++;
			}
		}
		printf("Case %d: %d %d\n",k,up,down);
	}
}
```
## UVA12019：Doom's Day Algorithm 
```C
//老師作法我尚未理解@@
#include <stdio.h>
char b[][20]={"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"};
int mon[12]={31,28,31,30,31,30,31,31,30,31,30,31};
int tot[7]={1,94,157,220,253,285,365};
int cal(int m,int n)
{
	int day=0;
	for(int i=0;i<m-1;i++){
		day+=mon[i];
	}
	day+=n;
	return day;
}
int main(){
	int n,m,d;
	scanf("%d",&n);
	while(n--){
		scanf("%d %d",&m,&d);
		printf("%d %d\n",m,d);
		int tday=cal(m,d);
		printf("%d \n",tday);
		int xday;
		if(tday<tot[1]){
			xday=tot[1]-tday;
			xday=xday%7-7;
			printf("%s\n",b[xday%7]);
		}
		else{
			for(int k=2;k<=7;k++){
				if(tday>tot[k] && tday<tot[k+1]){
					xday=tday-tot[k];
					xday=xday%7;
					printf("%s\n",b[xday%7]);
				}
			}
		}
	}
}
```
```c
#include <stdio.h>
char b[][20]={"Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"};
int mon[13]={31,28,31,30,31,30,31,31,30,31,30,31};
int main(){
	int n,m,d;
	scanf("%d",&n);
	while(n--){
		scanf("%d %d",&m,&d);
		int tday=0;	
		for(int i=0;i<m-1;i++){
			tday+=mon[i];
		}
		tday+=d;		
		printf("%s\n",b[(tday+5)%7]);//因為這年是1月1號是禮拜六5+1日就是禮拜六，故要加5
	}
}
```
##
```C

```
## 第七周
## UVA10008：What's Cryptanalysis? 
```C
#include <stdio.h>
#include <string.h>

int main()
{
	int n,alphabet[26]={0};
	char a[100];
	scanf("%d ",&n);
	for(int k=0;k<n;k++){
		fgets( a , 100 ,stdin);//能將一串輸入，並包括空格，stdin是讀到換行為止。
		for(int i=0;i<strlen(a);i++){
			if(a[i]>='a' && a[i]<='z'){
				a[i]-=32;   //將小寫轉換成大寫
			} 
			if(a[i]>='A' && a[i]<='Z'){
				alphabet[a[i]-'A']++; //剪掉大A後會依序放入格子裡;
			}
		}	
	}
	for(int i=0;i<26;i++){
		int max=0;
		for(int k=0;k<26;k++){
			if(alphabet[k]>alphabet[max]){ //當數字大於MAX就交換
				max=k;
			}
		}
		if(alphabet[max]!=0){  //如果是0就不輸出
			printf("%c %d\n",max+'A',alphabet[max]);
		}
		alphabet[max]=0;
	}
}
```
## UVA10221：Satellites 
```C
#include <stdio.h>
#include <math.h>
int main()
{
	double s,a,PI=3.14159265358;
	char b[4];
	while(scanf("%lf %lf %s",&s,&a,b)!=EOF)
	{
		s+=6440;
		if(b[0]=='m'){
			a/=60;
		}
		printf("%lf %lf\n",2*s*PI*(a/360),2*s*sin(a*PI/180/2));
	}
}
```
## UVA10929：You can say 11
```C
#include <stdio.h>
int main()
{
	while(1){
		char a[1001]={};
		int b=0,c=0;
		scanf("%s",a);
		if(a[0]=='0'){
			break;
		}
		for(int i=0;a[i];i+=2){
			b+=a[i]-'0';
		}
		for(int i=1;a[i];i+=2){
			c+=a[i]-'0';
		}
		if((b-c)%11==0){
			printf("%s is a multiple of 11.\n",a);
		}
		else{
			printf("%s is not a multiple of 11.\n",a);
		}
	}
}
```
## UVA11332：Summing Digits
```C
#include <stdio.h>
#include <string.h>
int main()
{
	char n[10]; //因為是2,000,000,000所以是10格
	
	scanf("%s",n);
	while( strcmp(n,"0")!=0 ){ //輸入的N和"0"，比較如果一樣會輸出0，如果不是0就繼續運算。
		while(1){
			int sum=0;
			for(int i=0;i<strlen(n);i++){ //Strlen是來查字串長度
				sum+=n[i]-'0'; //因為用字串來表示，所以要-'0'才行(ASCII碼)
			}
			if(sum<10){
				printf("%d\n",sum); 
				break;
			}
			char s[10];
			sprintf(s,"%d",sum);//把值丟到S陣列裡
			strcpy(n,s);//將S陣列複製到n陣列
		}
		scanf("%s",n);
	}
}
```
```c
#include <stdio.h>
int main()
{
	while(1){
		int n,sum=0;
		scanf("%d",&n);
		if(n==0){
			break;
		}
		while(n){
			sum+=n%10;
			n/=10;
			if(n==0 && sum>=10){
				n=sum;
				sum=0;
			}
		}
		printf("%d\n",sum);
	}
}
```
## UVA1225：Digit Counting 
```C
#include <stdio.h>
int main()
{
	int n;
	scanf("%d",&n);
	while(n--){
		int b,a[10]={},c;
		scanf("%d",&b);
		for(int i=1;i<=b;i++){
			if(i<10){
				a[i]++;
			}
			else{
				c=i;
				while(c){
					a[c%10]++;
					c/=10;
				}
			}
		}
		for(int i=0;i<9;i++){
			printf("%d ",a[i]);
		}
		printf("%d\n",a[9]);
	}
}
```
## UVA272：TeX Quotes 
```C
#include <stdio.h>
int main()
{
	char a;
	int i=1;
	while( (a=getchar())!=EOF ){
		if( a=='"'){
			if(i==1){
				printf("``");
			}
			else{
				printf("''");
			}
			i=!i;
		}
		else{
			printf("%c",a);
		}
	}
}
```
## 第10周
## UVA10222：Decode the Mad man 
```C
#include <stdio.h>
#include <string.h>
int main()
{
	char key[4][12]={
	"`1234567890-=",
	"qwertyuiop[]\",
	"asdfghjkl;'",
	"zxcvbnm,./"};
	char a[20];
	fgets(a,sizeof(a),stdin);
	for(int i=0;i<strlen(a);i++){
		if(a==" "){
			printf("%c",a);
		}
		else{
			for(int j=0;j<4;j++){		
				for(int m=0;m<strlen(key[j]);m++){
					if(a[m]>61 && a[m]<91){
						a[m]+=32;
					}
					if(a[m]==key[j][m]){
						printf("%c",key[j][m-2]);
					}
				}
			}
		}
		printf("\n");
	}
}
```
## UVA10409：Die Game 
```C

```
## UVA10415：Eb Alto Saxophone Player   
```C

```
