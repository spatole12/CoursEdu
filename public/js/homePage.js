// const data = require("/data");
// const userData = data.userData;

// document.getElementById("javaProgress").innerHTML = "20%";
// document.getElementById("javaScriptProgress").innerHTML = "76%";

(function (){
    $.ajax({url:"http://localhost:3000/progress",success:function(result){
        const userJavaProgress = result.javaProgress;
        const userJavaScriptProgress = result.javaScriptProgress;
        const userPythonProgress = result.pythonProgress;
        const userCProgress = result.cPlusProgress;

        const userJavaQuiz = result.javaQuiz;
        const userJavaScriptQuiz = result.javaScriptQuiz;
        const userPythonQuiz = result.pythonQuiz;
        const userCQuiz = result.cPlusQuiz;

        var bar =new ProgressBar.Circle(containerJavaProgress, {
            strokeWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            color: '#049dff',
            trailColor: '#eee',
            trailWidth: 3,
            svgStyle: null
          });
          
          bar.animate(userJavaProgress/100);

          var bar1 = new ProgressBar.Circle(containerJavaScriptProgress, {
            strokeWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            color: '#049dff',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: null
          });
          
          bar1.animate(userJavaScriptProgress/100);

          var bar2 = new ProgressBar.Circle(containerPythonProgress, {
            strokeWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            color: '#049dff',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: null
          });
          
          bar2.animate(userPythonProgress/100);

          var bar3 = new ProgressBar.Circle(containerCplusProgress, {
            strokeWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            color: '#049dff',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: null
          });
          
          bar3.animate(userCProgress/100);

          var bar4 =new ProgressBar.Circle(containerJavaQuiz, {
            strokeWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            color: '#049dff',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: null
          });
          
          bar4.animate(userJavaQuiz/100);

          var bar5 =new ProgressBar.Circle(containerJavaScriptQuiz, {
            strokeWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            color: '#049dff',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: null
          });
          
          bar5.animate(userJavaScriptQuiz/100);

          var bar6 =new ProgressBar.Circle(containerPythonQuiz, {
            strokeWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            color: '#049dff',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: null
          });
          
          bar6.animate(userPythonQuiz/100);

          var bar7 =new ProgressBar.Circle(containercPlusQuiz, {
            strokeWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            color: '#049dff',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: null
          });
          
          bar7.animate(userCQuiz/100);



        document.getElementById("javaProgress").innerHTML = userJavaProgress+"%";
        document.getElementById("javaScriptProgress").innerHTML = userJavaScriptProgress+"%";
        document.getElementById("pythonProgress").innerHTML = userPythonProgress+"%";
        document.getElementById("C++Progress").innerHTML = userCProgress+"%";

        document.getElementById("javaQuiz").innerHTML = userJavaQuiz+"%";
        document.getElementById("javaScriptQuiz").innerHTML = userJavaScriptQuiz+"%";
        document.getElementById("pythonQuiz").innerHTML = userPythonQuiz+"%";
        document.getElementById("cPlusQuiz").innerHTML = userCQuiz+"%";
        // $("#javaProgress").html = userJavaProgress;
        // $("#javaScriptProgress").html = userJavaScriptProgress;
        // $("#PythonProgress").html = userPythonProgress;
        // $("#C++Progress").html = userCProgress;
    }});
})();

