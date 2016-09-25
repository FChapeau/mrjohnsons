var runGenerator=
{
    runComponents : {
        location: ["at a bar", "at a warehouse", "in the barren district", "in a matrix host", "in a moving vehicule", "in astral plane"],
        employer: ["a secret society", "a political group", "a government agency", "a minor corporation", "a criminal syndicate", "a magical group", "a private individual", "an exotic being"],
        jobType: ["a data steal", "an assassination", "a demolition", "an extraction", "an insertion", "a misdirection", "a protection", "a delivery"],
        macguffin: ["a key employee", "a prototype product", "cutting edge technology research", "a bioengineered life form", "a magical object"],
        twist: ["security is unexpectedly high", "a third party is also interested", "the target is not what is appears to be", "the job requires a rare piece of equipment", "target has moved", "the employer decides to double-cross them"]
    },

    generate:
        function(component){
            var randomElement = Math.floor(Math.random() * this.runComponents[component].length);
            var cardId = component + "Card";
              document.getElementById(component).innerHTML = this.runComponents[component][randomElement];
              document.getElementById(cardId).innerHTML= this.runComponents[component][randomElement];
        },
    generateAll:
    function(){
        runGenerator.generate("location");
        runGenerator.generate("employer");
        runGenerator.generate("jobType");
        runGenerator.generate("macguffin");
        runGenerator.generate("twist");

    }
};
document.getElementById("genBtn").addEventListener("click", runGenerator.generateAll);

document.getElementById("chgLocation").addEventListener("click", function(){
    runGenerator.generate("location");
});
document.getElementById("chgEmployer").addEventListener("click", function(){
    runGenerator.generate("employer");
});
document.getElementById("chgJob").addEventListener("click", function(){
    runGenerator.generate("jobType");
});
document.getElementById("chgMcguffin").addEventListener("click", function(){
    runGenerator.generate("macguffin");
});
document.getElementById("chgTwist").addEventListener("click", function(){
    runGenerator.generate("twist");
});

runGenerator.generateAll();
