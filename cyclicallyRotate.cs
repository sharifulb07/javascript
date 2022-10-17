using System;

public class cyclicallyRotate
{
    static int [] arr={1,2,3,4,5,6,7,8,9};

    // rotate function

    public static void Rotate(arr){
        int x=arr[arr.Length-1], i;

        for(i=arr.Length-1;i>0;i--){
            arr=arr[i-1];
        arr[0]=x;
        }
    }

    public static void Main(string [] args){
    
    }
    
}