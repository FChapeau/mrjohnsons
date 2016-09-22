var runGenerator=
{
    runComponents : {
        location: ["at a bar", "at a warehouse", "in the barren district", "in a matrix host", "in a moving vehicule", "in astral plane"],
        employers: ["a secret society", "a political group", "a government agency", "a minor corporation", "a criminal syndicate", "a magical group", "a private individual", "an exotic being"],
        jobType: ["a data steal", "an assassination", "a demolition", "an extraction", "an insertion", "a misdirection", "a protection", "a delivery"],
        macguffin: ["a key employee", "a prototype product", "cutting edge technology research", "a bioengineered life form", "a magical object", "an urban building", "a rural location"],
        twists: ["security is unexpectedly high", "a third party is also interested", "the target is not what is appears to be", "the job requires a rare piece of equipment", "target has moved", "the employer decides to double-cross them"]
    },
    generate:
        function(component){
            var randomElement = Math.floor(Math.random() * this.runComponents[component].length);
            document.getElementById(component).innerHTML = this.runComponents[component][randomElement];
        },
    generateAll:
    function(){
        runGenerator.generate("location");
        runGenerator.generate("employers")
        runGenerator.generate("jobType");
        runGenerator.generate("macguffin");
        runGenerator.generate("twists");
    }
};
document.getElementById("genBtn").addEventListener("click", runGenerator.generateAll);

document.getElementById("location").addEventListener("click", function(){
    runGenerator.generate("location");
});
document.getElementById("employers").addEventListener("click", function(){
    runGenerator.generate("employers");
});
document.getElementById("jobType").addEventListener("click", function(){
    runGenerator.generate("jobType");
});
document.getElementById("macguffin").addEventListener("click", function(){
    runGenerator.generate("macguffin");
});
document.getElementById("twists").addEventListener("click", function(){
    runGenerator.generate("twists");
});

runGenerator.generateAll();