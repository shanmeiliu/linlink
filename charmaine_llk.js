var num_cli=0;

 var obj1,obj2, obj0 ;
 var n=6;
 var img_num = 17
var imgdir="gif-to-png/";
var img_format = ".jpg";
var round = Number(sessionStorage.getItem('round'));
console.log('8888888888888888888888888888888888')
console.log(sessionStorage.getItem('round'))
console.log(round)
if(round%2 == 0){img_num = 16;imgdir="2013_11_29/"}
  function initial()
  {
    
     document.write("<link href='llk-css/outstyle.css' rel='stylesheet' type='text/css' />");
     document.write("<div  id='debug_info'><h1 >  How to play </h1></div>");
     document.write("<div  id='game_info'><h3 >    - Connect 2 similar images with up to 3 straight lines - Each level will limit time, game over when time runs out </h3></div>");
      document.write("<div  id='llk_layout'>");
     var i, j;
      //generate linlink layout
      for(i=0;i<=n+1;i++)
      {
         for(j=0;j<=n+1;j++)
          {
              k=parseInt(img_num*Math.random());
              imgpath=imgdir+"charmaine_"+k+img_format;
              img_id = (i*(n+2)+j);
             str_element="<img id="+img_id+" src="+imgpath+" class='llk_layout_img'/>";
              if(i==0||j==0||i==n+1||j==n+1)
                  str_element="<img id="+(i*(n+2)+j)+" src="+imgdir+"image.png width=0 height=0 dispaly='hidden'/>";
              document.write(str_element);
          }
          document.write("<br/>");
          
      }
    obj0=document.getElementById(0);
      console.log('000000000000000')
      console.log(obj0.src)
      
        // var item = document.getElementsByClassName("llk_layout_img").onclick;
        // console.log('=======================')
        // console.log(item)
      document.addEventListener('click',function(e){
          
        //   console.log('===================')
        //   console.log(e.target.id)
        //   console.log('===============')
          //console.log(e)
          row=parseInt(e.target.id/(n+2));
          col=e.target.id%(n+2);
        //   console.log(row, col)
        //   console.log(e.target.src)
        //   console.log(obj0.src)

          if (e.target.src == obj0.src){return;}
          // check how many times click

          
                //    console.log(num_cli)
          if(num_cli==0)//the click is first time
            {
                 obj1=e.target;
                    num_cli=1;
                }
            else//the click is second time 
                {
                    obj2=e.target;
                    num_cli = 0;
                    if (obj2 == obj1)
                      return;
                   res=judgeSame(obj1,obj2);
                   if (res == 0)
                           { alert(res); }
                   //soundRespond(res);
                   if(res==1)
                   {
                        obj1.src=obj0.src;
                       obj2.src=obj0.src;//"p.jpg";
                   }
                   //judgeHealth();
               }
               judgeHealth();
      })
      
      //onclick(console.log('===================erere==='+ img_id))
      //声音
     // document.write("</div>");
//       //声音1，消掉两个相同图片
//       document.write("<audio id='audio_choral1' src='llk-sound/boom.ogg' >the browser doesn't support</audio>");
//       //声音2，按错提示音
//       document.write("<audio id='audio_choral2' src='llk-sound/boom2.ogg' >the browser doesn't support</audio>");
//       //设置背景音乐
//       document.write("<br/><audio id='mybgsound'src='llk-music/take-me-away.mp3' autoplay='autoplay' volume=0.2 controls >the browser doesn't support</audio>");
//       //设置背景音乐声音
//      document.getElementById("mybgsound").volume=0.2;
     // obj0=document.getElementById(0);  
      //document.write("<embed height='150' width='310' src='llk-music/1.mp3' />");
  }
  //处理点击事件
//   function myclick(img_id)
//   { 
//       alert("myclick myevent");
//       //得到被点击的对象
//       event.cancelBubble=true; 
//       obj=document.elementFromPoint(myevent.clientX,myevent.clientY);
//      id_obj=obj.id;
//       //得到点击对象的行号与列号 并给出提示信息
//       row=parseInt(id_obj/n);
//      col=id_obj%n;
//       document.getElementById("debug_info").innerHTML = row + " " + col + "; " + obj + " name:" + obj.name + " id:" + obj.id + " x:" + myevent.clientX + " y:" + myevent.clientY + " " + obj.src;
//      if (obj.src == obj0.src)
//       {return;}
//       //判断当前是第几次点击
//       if(num_cli==0)//点击的第1张图片，设置为点击状态
//       {
//          obj1=obj;
//          num_cli=1;
//           //obj1.class="img_selected";
//       }
//       else//点击的是第二张图片，送入判断逻辑
//       {
//           obj2=obj;
//           num_cli = 0;
//           if (obj2 == obj1)
//             return;
//          res=judgeSame(obj1,obj2);
//          //alert(res);
//          soundRespond(res);
//          if(res==1)
//          {
//               obj1.src=obj0.src;
//              obj2.src=obj0.src;//"p.jpg";
//          }
//          //judgeHealth();
//      }
//      judgeHealth();
//  }
  function mymin(num1,num2)
  {
      if(num1<num2)
          return num1;
      return num2;
  }
  function mymax(num1,num2)
  {
      if(num1>num2)
          return num1;
      return num2;
  }
  function judgeHealth()
 {
     
      flagGameOver=1;
     for(i=1;i<=n;i++)
     {
         if(flagGameOver==0)
            break;
         for(j=1;j<=n;j++)
         {
             tempId=i*(n+2)+j;
            tempObj=document.getElementById(tempId);
            if(tempObj.src!=obj0.src)
            {                flagGameOver=0;
                 break;
            }
        }
    }
   if(flagGameOver==1)
   {alert("Cogratulations!");
   round=round+1;
   sessionStorage.removeItem('round');
   sessionStorage.setItem('round', round);
   console.log('9999999999999999999999999999999999999')
   console.log(sessionStorage.getItem('round'))
   

// If you are refreshing after an onclick then you'll need to return false directly after

location.reload();
return false;
   }
     //not successful yet, check if the canvas is healthy (there exist images can be cleared)
    flagGameHealthy=0;
     for(i=1;i<=n;i++)
     {
         if(flagGameHealthy==1)
            return 1;//break;
        for(j=1;j<=n;j++)
         {
             tempId1=i*(n+2)+j;
            tempObj1=document.getElementById(tempId1);
           if(tempObj1.src==obj0.src)
                continue;
            for(ii=i;ii<=n;ii++)
           {
               for(jj=1;jj<=n;jj++)
               {
                    if(ii==i&&jj==j)
                        continue;
                    tempId2=ii*(n+2)+jj;
                    tempObj12=document.getElementById(tempId2);
                if(tempObj1.src==obj0.src)
                        continue;
                     if(judgeSame(tempObj1,tempObj12)==1)
                    {
                        flagGameHealthy=1;
                         return 1;
                    }
                 }
             }
         }
     }
     if(flagGameHealthy==0)
     {
         //alert("No more inages can be cleared, NOW SHUFFLE");
         shuffle();
         judgeHealth();       
     }
 }
 function shuffle() {
    for (i = 1; i <= n; i++) {
         for (j = 1; j <= n; j++) {
             tempId = i * (n + 2) + j;
             tempObj = document.getElementById(tempId);
             if (tempObj.src != obj0.src) {
                 k=parseInt(10*Math.random());
                imgpath=imgdir+"charmaine_"+k+img_format;
                tempObj.src=imgpath;
            }
         }
     }
 }
 // Check if two image can be cleared
function judgeSame(o1, o2) 
 {
    //两张图片必须是同样的图片    
    if(o1.src!=o2.src)
    {
         return 0;
    }
    row1=parseInt(o1.id/(n+2));
   col1=parseInt(o1.id%(n+2));
    row2=parseInt(o2.id/(n+2));
    col2=parseInt(o2.id%(n+2));
    
    obj0=document.getElementById(0);
    //判断两张图片是否可以通过某一行可达
 
   throughFlag = 0;
   for(row=0;row<=n+1;row++)
    {
        //两个图片都可以列到达row行，设标志位flag，=1表示可达，=0表示不可达
         flag=1;
         //第row行，列通过
         for(col=mymin(col1,col2);col<=mymax(col1,col2);col++)
         {
             if(row==row1&&col==col1)
                 continue;
             if(row==row2&&col==col2)
                 continue;
             //路径上的一个图片，图片的行号为row，列号为col
             cur_id=(n+2)*row+col;
             obj=document.getElementById(cur_id);
             //该位置不为空
             if(obj.src!=obj0.src)
             {flag=0;break;}
         }
        if(flag==0)
             continue;
         //第row行，1列通过
         for(row_temp = mymin(row, row1); row_temp <= mymax(row, row1); row_temp++)
         {
             if(row_temp==row1)
                continue;
             cur_id=(n+2)*row_temp+col1;
             obj=document.getElementById(cur_id);
            if(obj.src!=obj0.src)
             {flag=0;break;}
        }
        if(flag==0)
             continue;
         //第row行，2列通过
         for (row_temp = mymin(row, row2); row_temp <= mymax(row, row2); row_temp++)
         {
            if(row_temp==row2)
                 continue;
             cur_id=(n+2)*row_temp+col2;
             obj=document.getElementById(cur_id);
             if(obj.src!=obj0.src)
             {flag=0;break;}
         }
         //找到一条可行路径
         if(flag==1)
         {
             throughFlag = 1;
             return 1;
             //break;
         }    
    }
    //行列转换再次判断
    col1=parseInt(o1.id/(n+2));
    row1=parseInt(o1.id%(n+2));
    col2=parseInt(o2.id/(n+2));
    row2=parseInt(o2.id%(n+2));
    for(row=0;row<=n+1;row++)
    {
         flag=1;
         for(col=mymin(col1,col2);col<=mymax(col1,col2);col++)
         {
             if(row==row1&&col==col1)
                 continue;
             if(row==row2&&col==col2)
                continue;
             cur_id=(n+2)*col+row;
             obj=document.getElementById(cur_id);
             if(obj.src!=obj0.src)
             {flag=0;break;}
         }
         if(flag==0)
             continue;
         for(row_temp=mymin(row,row1);row_temp<=mymax(row,row1);row_temp++)
         {
             if(row_temp==row1)
                 continue;
             cur_id=(n+2)*col1+row_temp;
             obj=document.getElementById(cur_id);
             if(obj.src!=obj0.src)
             {flag=0;break;}
         }
         if(flag==0)
             continue;
         for(row_temp=mymin(row,row2);row_temp<=mymax(row,row2);row_temp++)
         {
             if(row_temp==row2)
                 continue;
             cur_id=(n+2)*col2+row_temp;
             obj=document.getElementById(cur_id);
             if(obj.src!=obj0.src)
            {flag=0;break;}
         }
         if(flag==1)
         {
             throughFlag = 1;
             return 1;
             break;
         }    
    }
    return 0;
 }
 function soundRespond(flagThrough)
 {
     var tempaudio;
     if(flagThrough==0)
         tempaudio=document.getElementById("audio_choral2");
     else
         tempaudio=document.getElementById("audio_choral1");
     tempaudio.currentTime=0;
     tempaudio.play();
 }