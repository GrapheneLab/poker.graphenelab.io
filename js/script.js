// Variables for dynamic DOM blocks

var companiesReady = false;
var milestonesReady = false;
var costTableReady = false;

// Options Block

var companiesData = [
    {
        name: 'ROSSUL',
        logo: 'rossul.svg',
        link: 'https://www.rossul.com/',
        peoples: [
            {
                photo: 'eli.jpg',
                name: 'Eli Kanaki',
                position: 'UX Lead, MA',
                linkedIn: 'https://www.linkedin.com/in/kanaki/',
            },
            {
                photo: 'Konstantin.png',
                name: 'Konstantin Krupovich',
                position: 'BlockChain Wizard, BA',
                linkedIn: 'https://www.linkedin.com/in/konstantin-krupovich-6818a155/',
            },
            {
                photo: 'ting.jpg',
                name: 'Ting Yi Shen',
                position: 'UX Designer, MA',
                linkedIn: 'https://www.linkedin.com/in/tingxdesign/',
            },
            {
                photo: 'allen.jpg',
                name: 'Allen Kang',
                position: 'Interaction Designer, BA',
                linkedIn: 'https://www.linkedin.com/search/results/people/?facetCurrentCompany=%5B%222287677%22%5D',
            }
        ]
    },
    {
        name: 'Graphene Lab',
        logo: 'graphene.png',
        link: 'http://graphenelab.io/',
        peoples: [
            {
                photo: 'igor.png',
                name: 'Igor Romanov',
                position: 'Core blockchain developer',
                linkedIn: 'https://www.linkedin.com/in/igor-romanov-b72846ab/',
            },
            {
                photo: 'ruslan.png',
                name: 'Ruslan Salikhov',
                position: 'Blockchain developer',
                linkedIn: 'https://www.linkedin.com/in/rsalikhov/',
            },
            {
                photo: 'Roman.png',
                name: 'Roman Dagaev',
                position: 'Frontend developer',
                linkedIn: 'https://www.linkedin.com/in/roman-dagaev-9a9329164/',
            },
            {
                photo: 'Anton.png',
                name: 'Anton Tishchenko',
                position: 'Frontend developer',
                linkedIn: 'https://www.linkedin.com/in/антон-тищенко-876806114/',
            }
        ]
    }
];

var milestonesData = [
    {
        month: 'aug',
        milestones: [
            {
                done: true,
                type: 'design',
                title: 'Research',
                description: 'At this stage, ROSSUL will work closely with Bitshares stakeholders to gather project specifications and establish critical success factors. We will begin the process by interviewing stakeholders as a group or individually. At this stage, it is imperative that we ask the right questions and collect our data in an unbiased manner.'
            },
            {
                done: false,
                type: 'design',
                title: 'Information Architecture',
                description: 'We will create a structure for the application, that allows users understand where they are, and where the information they want is in relation to their position. This will results in creation of site maps, hierarchies, categorizations, navigation.'
            },
            {
                done: false,
                type: 'design',
                title: 'Desktop Layout Wireframes',
                description: 'At this stage, ROSSUL will work closely with Bitshares stakeholders to gather project specifications and establish critical success factors. We will begin the process by interviewing stakeholders as a group or individually. At this stage, it is imperative that we ask the right questions and collect our data in an unbiased manner.'
            }
        ]
    },
    {
        month: 'sep',
        milestones: [
            {
                done: false,
                type: 'design',
                title: 'Mobile Wireframes',
                description: 'These are the most effective way to visualize the data structure and represent UI features. It enables effective communication between team members and, more importantly, allows for early testing of workflows, navigation, and overall layouts.'
            },
            {
                done: false,
                type: 'design',
                title: 'User Testing',
                description: 'Implement proof-of-concept and plugins integration functions'
            },
            {
                done: false,
                type: 'development',
                title: 'Estimating workload',
                description: 'Architecture and planning stages of development. The study of the internal features of the code base, the search for solutions for the implementation of more optimized and qualitative product.'
            },

        ]
    },
    {
        month: 'oct',
        milestones: [
            {
                done: false,
                type: 'design',
                title: 'Look & Feel Design',
                description: 'Implement proof-of-concept and plugins integration functions'
            },
            {
                done: false,
                type: 'development',
                title: 'Implementation of primary interfaces',
                description: 'Creation of interactive mockups from static ones, testing interactive mockups for the quality of User Experience, iterative improvements to visual and UX design.'
            },
            {
                done: false,
                type: 'development',
                title: 'Transfer an existing project',
                description: 'Inclusion of existing functionality, binding and uploading current data from the blockchain, working with the output of static information.'
            }
        ]
    },
    {
        month: 'nov',
        milestones: [
            {
                done: false,
                type: 'development',
                title: 'Development of new functionality',
                description: 'Adding opportunities to work with stealth transactions, improving and finalizing already implemented solutions in order to improve the quality of the product.'
            },
            {
                done: false,
                type: 'development',
                title: 'Documentation',
                description: 'Create documentation and API for community use as well as for the expansion and development of the platform.'
            }
        ]
    },
    {
        month: 'dec',
        milestones: [
            {
                done: false,
                type: 'development',
                title: 'Code Handover and overlap period',
                description: 'To simplify the onboarding and code handover we expect some overlap time with the current UI team. This is a standard process that reduces the risk of setback and keeps the development velocity constant. The process facilitates direct information exchange between engineers and designers, brings the current UI team onboard the app’s code and architecture, provides support for the current UI team when specific information is needed.'
            }
        ]
    },
    {
        month: 'jan'
    }
];

var costData = [
    {
        title: 'Design',
        table: [
            {
                sectionTitle: 'RESEARCH',
                rows: [
                    {
                        type: 'normal',
                        activity: "Technical and functional requirements",
                        price: '2100'
                    },
                    {
                        type: 'normal',
                        activity: "Competitors and field study",
                        price: '2400'
                    },
                    {
                        type: 'normal',
                        activity: "Analysis / Interviews",
                        price: '3600'
                    },
                    {
                        type: 'normal',
                        activity: "User research / Personas",
                        price: '6000'
                    }
                ]
            },
            {
                sectionTitle: 'DESIGN (Desktop version)',
                rows: [
                    {
                        type: 'normal',
                        activity: "IA and Workflows",
                        price: '8500'
                    },
                    {
                        type: 'normal',
                        activity: "Wireframes",
                        price: '30000'
                    },
                    {
                        type: 'normal',
                        activity: "Prototype",
                        price: '3000'
                    },
                    {
                        type: 'normal',
                        activity: "Look & Feel",
                        price: '12000'
                    }
                ]
            },
            {
                sectionTitle: 'DESIGN (Mobile version - tablets and phones)',
                rows: [
                    {
                        type: 'normal',
                        activity: "Wireframes (Tables and Phones)",
                        price: '20000'
                    },
                    {
                        type: 'normal',
                        activity: "Prototype",
                        price: '3000'
                    },
                    {
                        type: 'normal',
                        activity: "Look & Feel",
                        price: '12000'
                    }
                ]
            },
            {
                rows: [
                    {
                        type: 'bold',
                        activity: "UI Components Library",
                        price: '3600'
                    },
                    {
                        type: 'bold',
                        activity: "Project Management",
                        price: '10620'
                    }
                ]
            }
        ]
    },
    {
        title: 'Development & Integration',
        table: [
            {
                sectionTitle: 'Research & Documentation',
                rows: [
                    {
                        type: 'normal',
                        activity: "Estimating workload",
                        price: '2480'
                    },
                    {
                        type: 'normal',
                        activity: "Documentation",
                        price: '8620'
                    }
                ]
            },
            {
                sectionTitle: 'Development',
                rows: [
                    {
                        type: 'normal',
                        activity: "Implementation of primary interfaces",
                        price: '13840'
                    },
                    {
                        type: 'normal',
                        activity: "Transfer an existing project",
                        price: '41520'
                    },
                    {
                        type: 'normal',
                        activity: "Development of new functionality",
                        price: '32240'
                    },
                    {
                        type: 'normal',
                        activity: "API",
                        price: '13840'
                    }
                ]
            },
            {
                sectionTitle: 'Code Handover and overlap period',
                rows: [
                    {
                        type: 'normal',
                        activity: "Estimated time: 100 hours/team\nIf less time is required, the allocated funds will be distributed back to the community.",
                        price: '25000'
                    }
                ]
            }
        ]
    }
];


// Polyfills

if (!Object.values) {
    Object.values = function values(object) {

        var result = [];

        for(var i in object){

            if(typeof object[i] === 'object'){
                result.push(object[i]);
            }

        }

        // result.slice(0, result.length - 1)


        return result;
    }
}

if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, "includes", {
        enumerable: false,
        value: function(obj) {
            var newArr = this.filter(function(el) {
                return el == obj;
            });
            return newArr.length > 0;
        }
    });
};

// Set companies data in DOM

var companiesDOM = '';
var companiesParentBlock = document.getElementById('companies-items');

companiesData.forEach(function (company) {

    var items = '';

    company.peoples.forEach(function (item, index) {

        var className = 'companies-item';

        if((index + 1) % 2 === 0){
            className = className + ' fade-in-right'
        } else {
            className = className + ' fade-in-left'
        }

        items = items
            + '<div class="col-md-3 col-sm-6">'
                + '<div class="' + className + '">'
                    + '<div class="companies-item__user-info">'
                        + '<div class="companies-item__photo image-wrapper">'
                            + '<img src="img/team-peoples/' + item.photo + '" alt="' + item.name + '">'
                        + '</div>'
                        + '<span class="companies-item__name">' + item.name + '</span>'
                        + '<span class="companies-item__position">' + item.position + '</span>'
                    + '</div>'
                    + '<a class="companies-item__social image-wrapper" href="' + item.linkedIn + '" target="_blank" rel="nofollow">'
                        + '<img src="img/linkedin.PNG" alt="">'
                    + '</a>'
                + '</div>'
            + '</div>'
    });

    companiesDOM = companiesDOM +
        '<div class="companies__item">'
            + '<div class="companies__item-logo image-wrapper fade-in-bottom">'
                + '<img src="img/team-logos/' + company.logo + '" alt="' + company.name + '">'
            + '</div>'
            + '<div class="row">'
                + items
            + '</div>'
            + '<a href="' + company.link + '" target="_blank" rel="nofollow" class="companies__about-btn">More about ' + company.name + '</a>'
        + '</div>';
});

companiesParentBlock.innerHTML = companiesDOM;

companiesReady = true;




//Set milestones block

var milestonesParentBlock = document.getElementById('milestones-wrapper');
var milestonesIds = [];
var milestonesDOM = '';

milestonesData.forEach(function (elem) {
    milestonesDOM = milestonesDOM
        + '<h3 class="milestones__month">'
            + '<span class="milestones__month-text">' + elem.month + '</span>'
        + '</h3>';

    if(elem.milestones){
        elem.milestones.forEach(function(milestone, index){

            var containerClass = 'milestone';
            var id = elem.month + '-' + index;

            milestonesIds.push(id);

            if(milestone.done){
                containerClass = containerClass + ' milestone--done';
            }

            var newElement =
                '<div id="' + id + '" class="' + containerClass + '">'
                    + '<span class="milestone__type">' + milestone.type + '</span>'
                    + '<h4 class="milestone__name">' + milestone.title + '</h4>'
                    + '<p class="milestone__description">' + milestone.description + '</p>'
                + '</div>';

            milestonesDOM = milestonesDOM + newElement;

        });
    }
});


milestonesParentBlock.innerHTML = milestonesDOM;



// Add margin top styles to blocks

var setMilestonesPosition = function(){

    var firstElem = document.getElementById('aug-0');
    var startParams = {
        index: 0,
        height: 0,
        month: '',
        prevOffsets: {
            left: firstElem.offsetTop + firstElem.offsetHeight,
            right: 0
        }
    };

    milestonesIds.reduce(function (prev, next) {
        var domBlock = document.getElementById(next);
        var classes = Object.values(domBlock.classList);
        var month = next.substr(0, next.indexOf('-'));
        var prevOffsets = prev.prevOffsets;
        var blockIsOdd = (prev.index + 1) % 2 > 0;
        var prevElemColumn = 'right';
        var currentBlockOffset = domBlock.offsetTop;

        if(blockIsOdd){
            prevElemColumn = 'left';
        }

        if(month === prev.month){

            var marginTop = - (prev.height / 2);

            domBlock.style.marginTop = marginTop + 'px';

            var actualOffset = currentBlockOffset + marginTop;
            var prevOffset = prevOffsets[prevElemColumn] + 40;

            if(actualOffset < prevOffset){
                domBlock.style.marginTop = marginTop + (prevOffset - actualOffset) + 'px';
            }

        }

        prevOffsets[prevElemColumn] = currentBlockOffset + domBlock.offsetHeight;

        if(!classes.includes('fade-in-left--animate') && !classes.includes('fade-in-right--animate')){

            var animationClass = 'fade-in-right';

            if(blockIsOdd){
                animationClass = 'fade-in-left';
            }

            domBlock.classList.add(animationClass);

        }


        return {
            index: prev.index + 1,
            height: domBlock.offsetHeight,
            month: month,
            prevOffsets: prevOffsets
        }

    }, startParams);
};

setMilestonesPosition();

milestonesReady = true;


// Set Cost Table

var costTableParentBlock = document.getElementById('costs-table');
var totalPrice = 0;
var costTableDOM = '';

var addComma = function(number){

    if(typeof(number) !== 'string'){
        number = number.toString();
    }

    return number.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

costData.forEach(function(elem){
    var itemPrice = 0;
    var rows = '';

    elem.table.forEach(function(section){

        //set section title

        if(section.sectionTitle){

            rows = rows
                + '<tr class="price-table__row">'
                    + '<td class="price-table__cell price-table__cell--section" colspan="2">' + section.sectionTitle + '</td>'
                + '</tr>';
        }

        //adding info from rows

        section.rows.map(function(row){

            //adding item price

            itemPrice = itemPrice + Number(row.price);

            var priceWithComma = addComma(row.price);
            var activityCell = '<td class="price-table__cell price-table__cell--activity">' + row.activity + '</td>';

            if(row.type === 'bold'){
                activityCell = '<td class="price-table__cell price-table__cell--section">' + row.activity + '</td>';
            }

            //adding row

            rows = rows
                +'<tr class="price-table__row">'
                    + activityCell
                    + '<td class="price-table__cell price-table__cell--price">$ ' + priceWithComma + '</td>'
                + '</tr>'
        });


    });

    var table =
        '<table class="price-table__table">'
            + '<tr class="price-table__header">'
                + '<th class="price-table__cell">Activity</th>'
                + '<th class="price-table__cell">Price</th>'
            + '</tr>'
            + rows
        + '</table>';
    var priceText = elem.title;

    if(elem.title.indexOf(' ') > -1){
        priceText = elem.title.substr(0, elem.title.indexOf(' '));
    }

    costTableDOM = costTableDOM +
        '<div class="price-table__item-wrapper">'
            + '<h3 class="price-table__title">' + elem.title +'</h3>'
            + table
            + '<div class="price-table__price-wrapper">'
                + '<span class="price-table__price-text">' + priceText + ' total</span>'
                + '<span class="price-table__price">$ ' + addComma(itemPrice) + '</span>'
            + '</div>'
        + '</div>';

    totalPrice = totalPrice + itemPrice;
});

costTableParentBlock.innerHTML =
    '<div class="price-table">'
        + '<div class="price-table__tables-wrapper">'
            + costTableDOM
        + '</div>'
        + '<div class="price-table__price-wrapper price-table__price-wrapper--percent">'
            + '<span class="price-table__price-text">* 5% is included fixed fee for the escrow partner:</span>'
            + '<span class="price-table__price">$ ' + addComma(totalPrice  * 0.05) + '</span>'
        + '</div>'
        + '<div class="price-table__total-price">'
            + '<span class="price-table__price-text">Project Total</span>'
            + '<span class="price-table__price">$ ' + addComma(totalPrice + totalPrice * 0.05) + '</span>'
        + '</div>'
    + '</div>';

costTableReady = true;


// Adding Navigation Script

var scrollFunc = function(position){
    var isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
    var options = {
        "behavior": "smooth",
        "left": position.left,
        "top": position.top
    };

    if (isSmoothScrollSupported) {
        // Native smooth scrolling
        window.scrollTo(options);
    } else {
        // Old way scrolling without effects
        window.scrollTo(options.left, options.top);
    }
};

var passToElement = function(e){

    e.preventDefault();

    var targetHref = e.target.href;
    var blockId = targetHref.substr(targetHref.indexOf('#') + 1);
    var blockPosition = document.getElementById(blockId).getClientRects()[0];

    scrollFunc(blockPosition);
};

var backToTop = function(e){
    e.preventDefault();
    scrollFunc({left: 0, top: 0});
};



//Svg logo polyfill for IE

var setBitsharesLogo = function(){
    var block = document.getElementById('bitshares-logo');
    var bitsharesLogo =
        '<svg xmlns="http://www.w3.org/2000/svg" height="168" viewBox="0 0 5.265 8.373">'
            + '<defs><clipPath id="h"><path d="M52.337 828.165l.018-7.951c1.225-1.218 5.075-5.063 5.717-5.712.279.155.566.294.905.363v7.441z"/></clipPath><clipPath id="g"><path d="M59.999 809.752v-4.571a7.103 7.103 0 0 1 4.213 1.75l-3.215 3.23a2.71 2.71 0 0 0-.998-.409"/></clipPath><clipPath id="f"><path d="M54.763 806.931a7.153 7.153 0 0 1 4.214-1.75v4.571c-.365.07-.687.2-.965.409z"/></clipPath><clipPath id="e"><path d="M61.53 813.833c.192-.304.331-.643.41-.991h4.57c-.104 1.608-.749 3.058-1.75 4.214z"/></clipPath><clipPath id="d"><path d="M61.898 811.821a2.97 2.97 0 0 0-.368-.891l3.187-3.195a7.138 7.138 0 0 1 1.665 4.086z"/></clipPath><clipPath id="c"><path d="M59.871 814.784c.364-.07.686-.2.964-.409l3.25 3.229a7.165 7.165 0 0 1-4.214 1.751z"/></clipPath><clipPath id="b"><path d="M52.337 811.821c.104-1.608.749-3.058 1.75-4.214l3.229 3.224c-.182.304-.33.633-.391.99z"/></clipPath><clipPath id="a"><path d="M52.337 812.842h4.555c.078.352.226.686.424.969l-4.979 4.905z"/></clipPath></defs><g clip-path="url(#a)" transform="matrix(.35278 0 0 -.35278 -18.331 292.29)"><path d="M51.699 819.354h6.257v-7.15h-6.257z" fill="#00a9e0"/></g><g clip-path="url(#b)" transform="matrix(.35278 0 0 -.35278 -18.331 292.29)"><path d="M51.699 812.459h6.257v-5.491h-6.257z" fill="#00a9e0"/></g><g clip-path="url(#c)" transform="matrix(.35278 0 0 -.35278 -18.331 292.29)"><path d="M59.232 819.993h5.491v-6.257h-5.491z" fill="#00a9e0"/></g><g clip-path="url(#d)" transform="matrix(.35278 0 0 -.35278 -18.331 292.29)"><path d="M60.892 812.459h6.129v-5.363h-6.129z" fill="#00a9e0"/></g><g clip-path="url(#e)" transform="matrix(.35278 0 0 -.35278 -18.331 292.29)"><path d="M60.892 817.694h6.257v-5.491h-6.257z" fill="#00a9e0"/></g><g clip-path="url(#f)" transform="matrix(.35278 0 0 -.35278 -18.331 292.29)"><path d="M54.125 810.799h5.491v-6.257h-5.491z" fill="#00a9e0"/></g><g clip-path="url(#g)" transform="matrix(.35278 0 0 -.35278 -18.331 292.29)"><path d="M59.36 810.799h5.491v-6.257H59.36z" fill="#00a9e0"/></g><g clip-path="url(#h)" transform="matrix(.35278 0 0 -.35278 -18.331 292.29)"><path d="M51.699 828.803h7.917v-14.939h-7.917z" fill="#00a9e0"/></g>'
        + '</svg>';

    var ua = window.navigator.userAgent;

    if(ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1){
        bitsharesLogo =
            '<div class="about__logo image-wrapper">'
                + '<img src="img/BitShares_logo.png" alt="">'
            + '</div>'
    }

    block.innerHTML = bitsharesLogo;
}();




//Set Page Animation

var getBlocksArr = function(name){
    var block = document.getElementsByClassName(name);
    return Object.values(block);
};

var getWindowPosition = function(){
    return window.pageYOffset + window.innerHeight;
}

var animatedBlocksList = [];

var getAnimatedBlocksParams = function(arr){
    return arr.map(function (elem) {

        var offsetTop = elem.domElem.getBoundingClientRect().top;

        if(window.scrollY > 0){
            offsetTop = offsetTop + window.scrollY + window.innerHeight * 0.25;
        }

        return {
            offsetTop: offsetTop,
            animationType: elem.animationType,
            domElem: elem.domElem
        };
    });
};

var getAnimatedBlocks = function(){
    var windowPosition = getWindowPosition();
    var classesToAnimate = ['fade-in-bottom', 'fade-in-left', 'fade-in-right'];

    return classesToAnimate.reduce(function(array, className){

        var classList = getBlocksArr(className);
        var blocksList = [];

        classList.forEach(function (elem) {

            var offsetTop = elem.getBoundingClientRect().top;

            if(window.scrollY > 0){
                offsetTop = offsetTop + window.scrollY + window.innerHeight * 0.25;
            }

            blocksList.push({
                offsetTop: offsetTop,
                animationType: className,
                domElem: elem
            })
        });

        return array.concat(blocksList);
    }, []);
};

var animateBlocks = function(){

    var windowPosition = getWindowPosition();

    if(window.innerHeight > 880){
        windowPosition = windowPosition - window.innerHeight * 0.25;
    }

    var blocksToDelete = [];

    animatedBlocksList.forEach(function(elem, index){
        if(windowPosition > elem.offsetTop){

            var animationType = elem.animationType;
            elem.domElem.classList.remove(animationType);
            elem.domElem.classList.add(animationType + '--animate');

            blocksToDelete.push(index);
        }
    });

    animatedBlocksList = animatedBlocksList.filter(function (elem, index) {
        return blocksToDelete.indexOf(index) === -1;
    })
};

var awaitForDynamicElems = function(){

    if(companiesReady && milestonesReady && costTableReady){

        if(animatedBlocksList.length === 0){
            animatedBlocksList = getAnimatedBlocks();
        } else {
            animatedBlocksList = getAnimatedBlocksParams(animatedBlocksList);
        }

        animateBlocks();

        return;
    }

    setTimeout(function(){awaitForDynamicElems}, 1);
};

document.addEventListener("DOMContentLoaded", awaitForDynamicElems());

window.addEventListener('resize', function(){
    setTimeout(function () {
        setMilestonesPosition();
        awaitForDynamicElems();
    }, 300)
});

window.addEventListener('scroll', animateBlocks);
