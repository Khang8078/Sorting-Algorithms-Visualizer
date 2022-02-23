/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    E-MAIL:-    tummala.kethan@gmail.com
    *****************
*/

function Quick()
{
    c_delay=0;

    quick_sort(0,array_size-1);

    enable_buttons();
}

function partition (lo, hi)
{
    var i = lo + 1;
    var v = div_sizes[lo] ;//partitioning item 
    div_update(divs[lo],div_sizes[lo],"yellow");//Color update

        for(var j =lo + 1; j <= hi ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (div_sizes[ j ] < v)
            {
                div_update(divs[j],div_sizes[j],"yellow");//Color update

                div_update(divs[i],div_sizes[i],"red");//Color update
                div_update(divs[j],div_sizes[j],"red");//Color update

                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[j];
                div_sizes[j]=temp;

                div_update(divs[i],div_sizes[i],"red");//Height update
                div_update(divs[j],div_sizes[j],"red");//Height update

                div_update(divs[i],div_sizes[i],"blue");//Height update
                div_update(divs[j],div_sizes[j],"blue");//Height update

                i += 1;
            }
    }
    div_update(divs[lo],div_sizes[lo],"red");//Color update
    div_update(divs[i-1],div_sizes[i-1],"red");//Color update
    
    var temp=div_sizes[lo];//put the pivot element in its proper place.
    div_sizes[lo]=div_sizes[i-1];
    div_sizes[i-1]=temp;

    div_update(divs[lo],div_sizes[lo],"red");//Height update
    div_update(divs[i-1],div_sizes[i-1],"red");//Height update

    for(var t=lo;t<=i;t++)
    {
        div_update(divs[t],div_sizes[t],"green");//Color update
    }

    return i-1;//return the position of the pivot
}

function sort (lo, hi )
{
    if( hi <= lo ) return;
    var j = partition (lo, hi ) ;  // partion   
    sort (lo, j -1);//sort left part a[lo .. j-1]
    sort (j +1, hi) ;//sort right part a[j+1 .. hi]
    
 }

/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    E-MAIL:-    tummala.kethan@gmail.com
    *****************
*/