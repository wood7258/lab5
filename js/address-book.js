/* address-book.js
    this is where you will add your JavaScript to complete Lab 5
*/

$(function() {
    sortObjArray(Employees, 'last');
    render(Employees);
});

function render(entries) {
    var template = $('.template');
    var abook = $('.address-book');
    abook.empty();
    $.each(entries, function() {
        var abookline = template.clone();
        for (prop in entry) {
            if (prop === 'pic') {
                abookline.find('.pic').src(entry.prop)
                abookline.find('.pic').alt('Picture of ' + entry.first + ' ' + entry.last);
            }
            else {
                abookline.find('.' + prop).html(entry.prop);
            }
        }
        abookline.removeClass('.template');
        abook.append(abookline);
    });
}

/* sortObjArray()
    sorts an array of objects by a given property name
    the property values are compared using standard 
    operators, so this will work for string, numeric,
    boolean, or date values

    objArray        array of objects to sort
    propName        property name to sort by

    returns undefined (array is sorted in place)
*/
function sortObjArray(objArray, propName) {
    if (!objArray.sort)
        throw new Error('The objArray parameter does not seem to be an array (no sort method)');

    //sort the array supplying a custom compare function
    objArray.sort(function(a,b) {
        
        //note: this compares only one property of the objects
        //see the optional step where you can add support for 
        //a secondary sort key (i.e., sort by another property)
        //if the first property values are equal
        if (a[propName] < b[propName])
            return -1;
        else if (a[propName] === b[propName])
            return 0;
        else
            return 1;
    });
} //sortObjArray()

