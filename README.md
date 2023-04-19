# ajian world

*我是阿尖*

![車車好好看XD](https://i.ytimg.com/vi/_6TtTRrno3E/maxresdefault.jpg)
![Dream team]([https://twitter.com/Ajian_0313/status/1411345563598032899/photo/1](https://pbs.twimg.com/ext_tw_video_thumb/1578779599558672385/pu/img/51KGbAWymAAAmVWh.jpg))
```C
#include <stdio.h>
int main()
{
  printf("hello world");
}
```
## 大二 資料結構實務
## 第三周
## UVA10783 odd sum ●○○○○
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
## UVA11417：GCD ●○○○○
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
## 第3題：Back to High School Physics ●○○○○
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
## 第4題 UVA10055：Hashmat the brave warrior  ●○○○○
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
## 第5題 UVA10035：Primary Arithmetic  ●○○○○
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

## UVA10812：Beat the Spread! ●○○○○
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
## UVA11764：Jumping Mario ●○○○○
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
## UVA272：TeX Quotes ●○○○○
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
	char o[4][15]={
	{"`1234567890-="},
	{"qwertyuiop[]|"},
	{"asdfghjkl;'"},
	{"zxcvbnm,./"}
	};
	char a; //一個字一個字讀
	while(scanf("%c",&a)!=EOF){
		if(a==' ' || a=='\n'){ //跳行在這裡讀跟印，單引號
			printf("%c",a);
		}
		else{
			for(int j=0;j<4;j++){   //第一排鍵盤
				for(int m=0;m<strlen(o[j]);m++){  //那一排鍵盤照順序測
					if(a>'A' && a<'Z'){  //大寫轉小寫
						a+=32;
					}
					if(a==o[j][m]){ 
						printf("%c",o[j][m-2]);   //印出來
					}
				}
			}
		}
	}
}
```
## UVA10409：Die Game 
```C
#include <stdio.h>
int main()
{							  
	while(1){
		int n,die[6]={1,2,3,4,5,6}; //t,n,w,e,s,b //數字要重置放迴圈裡面
		char a[6];  //因為東南西北的英文有6個字母
		scanf("%d",&n);
		if( n==0 ) break;
		else{
			for(int i=0;i<n;i++){
				scanf("%s",a); //讀字串
				if( a[0]=='n' ){ //找一個字這樣寫 要讀整串的要用strcmp比較
					die[1]=die[0]; //n
					die[0]=die[4]; //t
					die[5]=7-die[0];//d
					die[4]=7-die[1];//s
				}
				if( a[0]=='s' ){
					die[4]=die[0];
					die[0]=die[1];
					die[5]=7-die[0];
					die[1]=7-die[4];
				}
				if( a[0]=='e' ){
					die[3]=die[0];
					die[0]=die[2];
					die[5]=7-die[0];
					die[2]=7-die[3];
				}
				if( a[0]=='w' ){
					die[2]=die[0];
					die[0]=die[3];
					die[5]=7-die[0];
					die[3]=7-die[2];
				}
			}
			printf("%d\n",die[0]);
		}
	}
}
```
## UVA10415：Eb Alto Saxophone Player   
```C
#include <stdio.h>
#include <string.h>
int main()
{
	char o[14][12]={
		{"c0111001111"},
		{"d0111001110"},
		{"e0111001100"},
		{"f0111001000"},
		{"g0111000000"},
		{"a0110000000"},
		{"b0100000000"},
		{"C0010000000"},
		{"D1111001110"},
		{"E1111001100"},
		{"F1111001000"},
		{"G1111000000"},
		{"A1110000000"},
		{"B1100000000"},
	};
	int n;
	scanf("%d\n",&n); //要多讀取一個\n 才不會錯
	while(n--){
		int count[10]={};
		char a[201],pre[11]="0000000000"; //記得pre寫法
		fgets(a,sizeof(a),stdin);  //讀取a整串文字
		for(int i=0;i<strlen(a);i++){ 
			for(int k=0;k<14;k++){
				if(a[i]==o[k][0]){ //查看字母是否一樣
					for(int m=0;m<10;m++){
						if(o[k][m+1]-pre[m]==1){  //如果放開就++
							count[m]++;
						}
						pre[m]=o[k][m+1];
					}
				}
			}
		}
		for(int i=0;i<9;i++){
			printf("%d ",count[i]);
		}
		printf("%d\n",count[9]);
	}
}

```
## 補課
## 氣泡排序
```C
#include <stdio.h>
#include <stdlib.h>
int main()
{
    int a[100000],n=10000,r,temp;
    ///亂數取值===========================================
    for(int i=0;i<n;i++)
    {
        a[i]=i+1;
    }
    for(int i=0;i<n;i++)
    {
        r=rand()%n;
        temp=a[i];
        a[i]=a[r];
        a[r]=temp;
    }
    ///氣泡排序============================================
    int comp=0,s=0;
    for(int i=0;i<n;i++){
        for(int j=0;j<n-i-1;j++){
            if(a[j]>a[j+1]){
                temp=a[j];
                a[j]=a[j+1];
                a[j+1]=temp;
                s++;
            }
            comp++;
        }
    }
    printf("使用氣泡排序法，比較了%d次，交換了%d次\n",comp,s);
}

```
## 插入
```C
#include <stdio.h>
#include <stdlib.h>
int main()
{
    int a[100000]={7,3,4,1,2,5,6},n=7,r,temp;
    ///亂數取值===========================================
   /* for(int i=0;i<n;i++)
    {
        a[i]=i+1;
    }
    for(int i=0;i<n;i++)
    {
        r=rand()%n;
        temp=a[i];
        a[i]=a[r];
        a[r]=temp;
    }
*/
    ///插入排序法==============================================
    int comp2=0,s2=0,key;

    for(int i=1;i<n;i++){
        key=a[i];
        int j=i-1;
        while(j>=0 && a[j]>key){
                a[j+1]=a[j];
                j--;

        }
        a[j+1]=key;
    }
    printf("使用插入排序法，比較了%d次，交換了%d次\n",comp2,s2);
    printf("結果=");
    for(int i=0;i<n;i++){
        printf("%d",a[i]);
    }
}
```
##選擇
```C
#include <stdio.h>
#include <stdlib.h>
int main()
{
    int a[100000]={7,3,4,1,2,5,6},n=7,r,temp;
    ///亂數取值===========================================
    /*for(int i=0;i<n;i++)
    {
        a[i]=i+1;
    }
    for(int i=0;i<n;i++)
    {
        r=rand()%n;
        temp=a[i];
        a[i]=a[r];
        a[r]=temp;
    }*/
    ///選擇排序法=============================================
    int comp3=0,s3=0;
    for(int i=0;i<n-1;i++){
        int mini=i;
        for(int j=i+1;j<n;j++){
            if(a[j]<a[mini])
                mini=j;
                //s3++;
            temp=a[mini];
            a[mini]=a[i];
            a[i]=temp;
            //comp3++;
        }
    }
    printf("使用選擇排序法比較了%d次 交換了%d次\n",comp3,s3);
    printf("結果=");
     for(int i=0;i<n;i++){
        printf("%d",a[i]);
    }
}
```
## 第11週
## UVA10041：Vito'sfamily 
```c
#include <stdio.h>
#include <stdlib.h>
int main()
{
	int n,m;
	scanf("%d",&n);
	while(n--){
		scanf("%d",&m);
		int a[m],temp,mid=0,ans=0;
		for(int i=0;i<m;i++){
			scanf("%d",&a[i]);
		}
		
		for(int i=0;i<m;i++){
			for(int j=0;j<m-i-1;j++){
				if(a[j]>a[j+1]){
					temp=a[j];
					a[j]=a[j+1];
					a[j+1]=temp;
				}
			}
		}
		
		if(m%2==0){
			mid=(a[m/2-1]+a[m/2])/2;
		}
		else{
			mid=a[(m+1)/2-1];
		}
		for(int i=0;i<m;i++){
			ans+=abs(a[i]-mid);
		}
		printf("%d\n",ans);
	}
}
```
## 第12周
## UVA10062：Tell me the frequencies!
```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
struct data{
	char m;
	int n;
}asc[100];
int cmp(const void *a,const void *b)
{
	if((*(struct data *)b).n -(*(struct data *)a).n)//ex:2=2 
		return (*(struct data *)b).n -(*(struct data *)a).n;
	else   //n等於的時候，去比m
		return (*(struct data *)a).m -(*(struct data *)b).m;
}
int main()
{
	char a[1000];
	
	for(int c=0;gets(a);c++)
	{
		int count[95]={0},n=0,k=0;
		if(c)
			printf("\n");
		for(int i=0;i<strlen(a);i++){
			count[a[i]-32]++;
		}
		for(int j=0;j<95;j++){
			if(count[j]>0)
				n++;
		}
		for(int i=0;i<95;i++){
			if(count[i]>0){
				asc[k].m=i+32;
				asc[k].n=count[i];
				k++;
			}
		}
		qsort(asc,n,sizeof(asc[1]),cmp);
		
		int maxidx=0;
		for(int j=0;j<n;j++){
			for(int i=0;i<n;i++){
				int max=0;
				if(asc[i].n >max){
					max =asc[i].n;
					maxidx =i;
				}
			}
			printf("%d %d\n",asc[maxidx].m,asc[maxidx].n);
			asc[maxidx].n=0;
		}
	}
}
```

## UVA10420：List of Conquests 
```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
struct data{
	char name[75];
	int c;
};
int cmp(const void *a,const void *b){
	return strcmp((*(struct data*)a).name ,(*(struct data *)b).name);	
}

int main()
{
	struct data girl[2000];
	for(int i=0;i<2000;i++){//清空字串陣列跟數字陣列
		strcpy(girl[i].name,"");
		girl[i].c=0;
	}
	
	int n,x=0;
	char country[75],w[75];
	scanf("%d",&n);
	getchar(); //避免\n讀近來
	
	while(n--){
		scanf("%s",country);
		gets(w);
		if(x==0){   //一開始先把一個國家放進去並++
			strcpy(girl[x].name,country);
			girl[x].c++;
			x++;
		}
		else{    //剩下的去判斷陣列裡面有沒有那個國家了，如果沒有就再放進去，有的話就++
			int inlist=0;
			for(int i=0;i<x;i++){
				if(strcmp(girl[i].name,country)==0){
					girl[i].c++;
					inlist=1;
					break;
				}
			}
			if(inlist==0){
				strcpy(girl[x].name,country);
				girl[x].c++;
				x++;
			}
		}
	}
	
	qsort(girl,x,sizeof(girl[1]),cmp); 
	
	for(int i=0;i<x;i++){
		printf("%s %d\n",girl[i].name,girl[i].c); 
	}
}
```

```C
//小葉老師的教法
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
char a[2000][75];
int compare( const void *p1,const void *p2){
	char *s1=(char*)p1;
	char *s2=(char*)p2;
	return strcmp(s1,s2);
}
char others[100];
int main()
{
	int n,ans=1;
	scanf("%d",&n);
	
	for(int i=0;i<n;i++){
		scanf("%s", a[i]);
		gets(others);
	}
	
	qsort( a, n, 75, compare);
	
	for(int i=0;i<n;i++){
			if(strcmp(a[i],a[i+1])!=0){
				printf("%s %d\n",a[i],ans);
				ans=1;
			}
			else {
				ans++;
			}
		
	}
}

```
## UVA11321：Sort! Sort!! and Sort!!! 
```c
#include <stdio.h>
int a[10000];
int swap( int i, int j)
{
	int temp=a[i];
	a[i]=a[j];
	a[j]=temp;
 	return a[i],a[j];
}
int main()
{
	int n,m;
	while( scanf("%d%d",&n,&m)==2 ){
		for(int i=0;i<n;i++){
			scanf("%d",&a[i]);
		}
		for(int i=0;i<n;i++){
			for(int j=i+1;j<n;j++){
				if(a[i]%m>a[j]%m){ //排餘數順序
					swap(i,j);
				}
				else if( a[i]%m==a[j]%m ){//餘數相同時。
					if( a[i]%2==0 && a[j]%2!=0 ){//奇數偶數交換
						swap(i,j);
					}
					else if( a[i]%2!=0 && a[j]%2!=0 && a[i]<a[j]){ //奇數排序，大到小
						swap(i,j);
					}
					else if( a[i]%2==0 && a[j]%2==0 && a[i]>a[j]){ //偶數排序，小到大
						swap(i,j);
					}					
				}
			}
		}	
		printf("%d %d\n",n,m);
		for(int i=0;i<n;i++){
			printf("%d\n",a[i]);
		}
	
	}
}
```
## 第13周
## UVA10107:What is the Median?
```c
#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a,const void *b)
{
	return *(int *)a-*(int *)b;
}
int main()
{
	int a[1000]={0},mid=0,n;
	while(scanf("%d",&a[n])!=EOF){
		if(n==0){
			mid=a[0];
		}
		else{
			qsort(a,n+1,sizeof(int),cmp);
			if((n+1)%2==0){
				mid=(a[(n+1)/2-1]+a[(n+1)/2])/2;
			}
			else{
				mid=a[(n+2)/2-1];
			}
		}
		printf("%d\n",mid);
		n++;
	}
}
```

## 第14周
## UVA10056：What is the Probability? 
```c
#include <stdio.h>
#include <math.h>
int main()
{
	int n;
	scanf("%d",&n);
	for(int i=0;i<n;i++){
		int a,b;
		double p,q,s1,r;
		scanf("%d %lf %d",&a,&p,&b);
		q=1-p;
		r=pow(q,a);
		s1=pow(q,(b-1))*p;
		if(p==0){
			printf("%.4lf\n",0);
		}
		else{
			printf("%.4lf\n",s1/(1-r));
		}
	}
}
```
## UVA10193：All You Need Is Love 
```c
#include <stdio.h>
#include <string.h>
#include <math.h>
int GCD( int e,int f)
{
	int r;
	if(e<f){
		int temp=e;
		e=f;
		f=temp;
	}
	r=e%f;//餘數
	while(r!=0){
		e=f;
		f=r;
		r=e%f;
	}
	return f;
}
int main()
{
	int n,t;
	scanf("%d",&n);
	t=n;
	while(n--){
		char a[31],b[31];
		scanf("%s %s",a,b);
		long int e=0,f=0,gcd;
		for(int i=0;i<strlen(a);i++){
			e+=(a[i]-48)*(int)pow(2,strlen(a)-1-i);//轉成十進位
		}
		for(int i=0;i<strlen(b);i++){
			f+=(b[i]-48)*(int)pow(2,strlen(b)-1-i);
		}
		gcd=GCD(e,f);
		if(gcd>1){
			printf("Pair #%d: All you need is love!\n",t-n);
		}
		else{
			printf("Pair #%d: Love is not all you need!\n",t-n);
		}
	}
}
```
```c
#include <stdio.h>
#include <string.h>
#include <math.h>
int GCD( int e,int f)
{	
	if(e%f==0){
		return f;
	}
	return GCD(f,e%f);
}
int main()
{
	int n,t;
	scanf("%d",&n);
	t=n;
	while(n--){
		char a[31],b[31];
		scanf("%s%s",a,b);
		long int e=0,f=0,gcd;
		for(int i=0;i<strlen(a);i++){
			e=e*2+(a[i]-48);//轉成十進位
		}
		for(int i=0;i<strlen(b);i++){
			f=f*2+(b[i]-48);
		}
		gcd=GCD(e,f);
		if(gcd>1){
			printf("Pair #%d: All you need is love!\n",t-n);
		}
		else{
			printf("Pair #%d: Love is not all you need!\n",t-n);
		}
	}
}
```
## UVA11349：Symmetric Matrix 
```c
#include <stdio.h>
int main()
{
	int n,m;
	scanf("%d",&n);
	for(int i=0;i<n;i++){
		char s[3];		
		scanf("%s %s %d",s,s,&m);
		int a[m*m],ans=1;
		for(int k=0;k<m*m;k++){
			scanf("%d",&a[k]);
		}
		for(int k=0;k<m*m;k++){
			if(a[k]<0){
				ans=2;
				break;
			}
			else{
				for(int k=0;k<(m*m)/2;k++){				
					if(a[k]!=a[(m*m)-1-k]){
						ans=0;
						break;
					}
				}
			}		
		}
		
		
		
		if(ans==1){
			printf("Test #%d: Symmetric.\n",i+1);
		}
		else if(ans==2){
			printf("Test #%d: Non-symmetric.\n",i+1);
		}
		else{
			printf("Test #%d: Non-symmetric.\n",i+1);		
		}
	}
}

```
## 第14周
## UVA10190：Divide, But Not Quite Conquer
```c
#include <stdio.h>
#include <math.h>
int main()
{
	int n,m;
	while(scanf("%d %d",&n,&m)!=EOF){
		int i=1;
		if(m!=1){
			while((int)pow(m,i) <=n ){
				i++;  //去看陣列的大小
			}
			
			int a[i];
			for(int k=0;k<i;k++){
				a[k]=0;
			}
			
			int j=0;
			a[j]=n;
			
			while(n%m==0){
				n=n/m;
				j++;
				a[j]=n;
			}
			
			if(a[i-1]==1){
				printf("%d",a[0]);
				for(int j=1;j<i;j++) printf(" %d", a[j]);
				printf("\n");
			}
			else{
				printf("Boring!\n");
			}
		}
		else{
			printf("Boring!\n");
		}
	}
}
```
## UVA10235：Simply Emirp 
```c
#include <stdio.h>
#include <string.h>
#include <math.h>
int prime(int n){
	int a=1;
	for(int i=2;i*i<=n;i++){
		if(n%i==0){
			a=0;
		}
	}
	return a;
}
int main()
{
	int n,a1=0,a2=0,b;
	while(scanf("%d",&n)!=EOF){
		int m=0;
		b=n;
		a1=prime(n);
		while(n){
			m=m*10+n%10;
			n/=10;
		}
		a2=prime(m);
		
		if(b==m){
			if(a1==1){
				printf("%d is prime.\n",b);
			}
			else{
				printf("%d is not prime.\n",b);
			}
		}
		else{
			if(a1==1){
				if(a2==1){
					printf("%d is emirp.\n",b);
				}
				else{
					printf("%d is prime.\n",b);
				}
			}
			else{
				printf("%d is not prime.\n",b);
			}
		}
	}
}

```
## UVA10922：2 the 9s 
```c
#include <stdio.h>
#include <string.h>
int degree(char *str){
	int m,d=0;
	if(strlen(str)==1 && str[0]=='9'){
		return 1;
	}
	
	while(strlen(str)>=2){
		m=0;
		for(int i=0;i<strlen(str);i++){
			m=m+str[i]-'0';//因為是字串改成數字
		}
		if(m%9==0){
			d++;
		}
		sprintf(str,"%d",m); //將數值放進字串中
	}
	return d;
}
int main()
{
	char n[1001]={0};
	while(scanf("%s",n)){
		if(n[0]=='0' && strlen(n)==1){
			break;
		}
		else{
			printf("%s ",n);
			
			int d=degree(n);
			
			if(d){
				printf("is a multiple of 9 and has 9-degree %d.",d);
			}
			else{
				printf("is not a multiple of 9.");
			}
			printf("\n");
		}
		memset(n,0,sizeof(n)); //把陣列的值變成0
	}
}
```
## UVA10931：Parity 
```c

```
## UVA12602：Nice Licence Plates
```c
#include <stdio.h>
#include <stdlib.h>
#include <math.h>
int main()
{
	int n,pa,pn;
	char str[10];
	scanf("%d",&n);
	while(n--){
		scanf("%s",str);
		pa=0;
		for(int i=0;i<3;i++){
			pa += (str[i]-65)*pow(26,2-i);
		}
		pn=0;
		for(int i=4;i<=7;i++)
		{
			pn+=(str[i]-48)*(int)pow(10,7-i);
		}
		int ans;
		ans=abs(pn-pa);
		if(ans<=100){
			printf("nice\n");
		}
		else{
			printf("not nice\n");
		}
	}
}
```
## 16周
## UVA10038：Jolly Jumpers 
```c
#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a,const void *b){
	return *(int *)a-*(int *)b;
}
int main()
{
	int n;
	while(scanf("%d", &n)!=EOF){
		int a[n],c=1;
		for(int i=0;i<n;i++){
			scanf("%d",&a[i]);
		}
		if(n==2){
			if(abs(a[1]-a[0])==1){
				printf("Jolly\n");
			}
			else{
				printf("Not jolly\n");
			}
		}
		else{
			int d[n-1];
			for(int i=0;i<n-1;i++){
				d[i]=abs(a[i+1]-a[i]);
			}
			
			qsort(d,n-1,sizeof(int),cmp);
			
			for(int i=0;i<n-2;i++){
				if(d[i+1]-d[i]!=1 || d[i+1]-d[i]<=0){
					printf("Not jolly\n");
					c=0;
					break;
				}
			}
			if(c==1)printf("Jolly\n");
		}
	}
}

```
## UVA10101：Bangla Numbers 
```c
#include <stdio.h>
void check(long long n){
	if(n/10000000!=0){
		check(n/10000000);
		printf(" %s","kuti");
		n=n%10000000;
	}
	if(n/100000!=0){
		check(n/100000);
		printf(" %s","lakh");
		n=n%100000;
	}
	if(n/1000!=0){
		check(n/1000);
		printf(" %s","hajar");
		n=n%1000;
	}
	if(n/100!=0){
		check(n/100);
		printf(" %s","shata");
		n=n%100;
	}
	if(n!=0){
		printf(" %d",n);
	}
}
int main()
{
  long long num;
  int x= 1;
  while(scanf("%lld",&num)!=EOF)
  {
  	printf("%4d.",x);
  	if(num==0)printf(" %d",num);
  	else check(num);
  	
  	printf("\n");
  	x++;
  }
}
```
## UVA10189：Minesweeper 
```c
#include <stdio.h>
int main()
{
	int n,m,o=0;
	scanf("%d%d",&n,&m);
	while(m!=0 && n!=0){
		char mine[n][m+1];
		char minec[n][m+1];
		
		for(int a=0;a<n;a++){
			scanf("%s",mine[a]);
		}
		for(int c=0;c<n;c++){
			for(int b=0;b<m+1;b++)
				minec[c][b]='\0';
		}
		
		int sum=0,i,j;
		for( i=0;i<n;i++){
			for( j=0;j<m;j++){
				if(mine[i][j]=='*'){
					minec[i][j]='*';
					continue;
				}
				else{
				sum=0;
				for(int y=i-1;y<=i+1;y++){
					for(int x=j-1;x<=j+1;x++){
						if((x>=0 && y>=0) && (x<m && y<n) && !(x==j && y==i)){
							if(mine[y][x]=='*')
								sum++;
						}
					}
				}
					minec[i][j]=sum+'0';
				}	
			}
			
		}
		if(o>0) printf("\n");
		printf("Field #%d:\n",++o);
		for(int i=0;i<n;i++){
			printf("%s\n",minec[i]);
		}
		
		scanf("%d%d",&n,&m);
 }
}
```
## UVA299：Train Swapping ●○○○○
```c
#include <stdio.h>
int main()
{
	int n,m;
	scanf("%d",&n);
	while(n--){
		scanf("%d",&m);
		int a[m],temp,p=0;
		for(int i=0;i<m;i++){
			scanf("%d",&a[i]);
		}
	
		for(int i=0;i<m;i++){
			for(int j=0;j<m-1-i;j++){
				if(a[j]>a[j+1]){
					temp=a[j];
					a[j]=a[j+1];
					a[j+1]=temp;
					p++;
				}
			}
		}
		printf("Optimal train swapping takes %d swaps.\n",p);
	}
}
```
