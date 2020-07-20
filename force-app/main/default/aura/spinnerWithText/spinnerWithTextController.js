({
    doInit : function(component, event, helper) {
        var size = component.get("v.size");
        var spinnerClass = 'spinner-medium';
        if (size == 'small') {
            spinnerClass = 'spinner-small';
        } else if (size == 'medium') {
            spinnerClass = 'spinner-medium';
        } else if (size == 'large') {
            spinnerClass = 'spinner-large';
        }
        component.set("v.spinnerClass", spinnerClass);
        console.log(component.get("v.size"));
        console.log(component.get("v.spinnerClass"));
    }
})
