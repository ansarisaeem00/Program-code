#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <limits.h>
#include <stdbool.h>

int main(){
  int min=0,temp;
  int max=0;
  int a[5],i,j;
  printf("Enter 5 nos to find min and max");
  for(i=0;i<6;i++)
   {
     scanf("%d",&a[i]);               
   }
   for(i=0;i<5;i++)
   {
     for (j=0;j<4;j++)
        {
            if (a[j] > a[j + 1])
            {
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }     
         } 
    }    
    for(i=0;i<4;i++)
    {
      min=min+a[i];                
    }
    for(i=5;i>1;i++)
    {
      max=max+a[i];                
    }
    printf("%d %d",min,max);
    return 0;
}

    


