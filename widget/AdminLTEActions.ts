namespace SereneSample{

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AdminLTEActions {
               
        public static initializeWidgetPage() {
            infoBoxSamples("infoBoxes");
            statBoxSamples("statBoxes");                   
            standardBoxSamples("standardBoxes");
            directChatSamples("chatBoxes");
            userWidgetSamples("userWidgets");
            boxCommentSamples("boxComment");            
            dashboardV2Samples("other");
            testGeneric("other");

        };                      
    }

    //INFO BOX -----------------------------------------------------------------
    export interface infoBoxElements{
        elementID: string, 
        icon: string,
        message: string,
        count: string,
        onclickAction?: () => {},
        boxColor?: string,
        iconColor?: string,
        progressbar?: boolean,
        progressWidth?: string,
        progressDescription?: string,
        myBootstrap?: string
    }

    function infoBoxSamples(targetID: string) {
        var box2: infoBoxElements = {
            elementID: targetID,
            iconColor: "bg-green",
            count: "1,411",
            icon: "fa fa-flag-o",
            message: "Messages"
        }
        var box3: infoBoxElements = {
            elementID: targetID,
            iconColor: "bg-yellow",
            count: "1,412",
            icon: "fa fa-files-o",
            message: "Messages"
        }
        var box4: infoBoxElements = {
            elementID: targetID,
            iconColor: "bg-red",
            count: "1,413",
            icon: "fa fa-star-o",
            message: "Messages"
        }

        //simple box
        addInfoBox({
            elementID: targetID,
            iconColor: "bg-aqua",
            count: "1,410",
            icon: "fa fa-envelope-o",
            message: "Messages"
        });
        addInfoBox(box2);
        addInfoBox(box3);
        addInfoBox(box4);

        //has progrss bar
        addInfoBox({
            elementID: targetID,
            iconColor: "bg-aqua",
            boxColor: "bg-aqua",
            count: "41,410",
            icon: "fa fa-bookmark-o",
            message: "Bookmarks",
            progressbar: true,
            progressWidth: "70%",
            progressDescription: "70% increase in 30 Days"
        });

        addInfoBox({
            elementID: targetID,
            iconColor: "bg-green",
            boxColor: "bg-green",
            count: "41,410",
            message: "Likes",
            icon: "fa fa-thumbs-o-up",
            progressbar: true,
            progressWidth: "70%",
            progressDescription: "70% increase in 30 Days"
        });
        addInfoBox({
            elementID: targetID,
            iconColor: "bg-yellow",
            boxColor: "bg-yellow",
            count: "41,410",
            message: "Events",
            icon: "fa fa-calendar",
            progressbar: true,
            progressWidth: "70%",
            progressDescription: "70% increase in 30 Days"
        });
        
        addInfoBox({
            elementID: targetID,
            boxColor: "bg-red",
            count: "41,410",
            message: "Comments",
            icon: "fa fa-comments-o",
            progressbar: false,
            progressWidth: "70%",
            progressDescription: "70% increase in 30 Days"
        });  



    }

    //using createElement
    export function addInfoBox(box: infoBoxElements) {
        
        var outerDiv = document.createElement("div");
        outerDiv.className = (box.myBootstrap==undefined)?"col-md-3 col-sm-6 col-xs-12": box.myBootstrap;

        var middleDiv = document.createElement("div");
        middleDiv.className = (box.boxColor != undefined) ? "info-box " + box.boxColor : "info-box";

        var span = document.createElement("span");
        span.className = (box.iconColor != undefined) ? "info-box-icon " + box.iconColor : "info-box-icon ";

        var i = document.createElement("i");
        i.className = box.icon;

        span.appendChild(i);

        var innerDiv = document.createElement("div");
        innerDiv.className = "info-box-content";

        var msgSpan = document.createElement("span");
        msgSpan.className = "info-box-text";
        msgSpan.innerText = box.message;

        var numSpan = document.createElement("span");
        numSpan.className = "info-box-number";
        numSpan.innerText = box.count;

        outerDiv.appendChild(middleDiv);
        middleDiv.appendChild(span);
        middleDiv.appendChild(innerDiv);
        innerDiv.appendChild(msgSpan);
        innerDiv.appendChild(numSpan);

        if (box.progressbar == true) {
                var progDiv = document.createElement("div");
                progDiv.className = "progress";

                var progBar = document.createElement("div");
                progBar.className = "progress-bar";
                progBar.style.width = box.progressWidth;

                var progDesc = document.createElement("div");
                progDesc.className = "progress-description";
                progDesc.innerText = box.progressDescription;
                progDiv.appendChild(progBar);
                innerDiv.appendChild(progDiv);
                innerDiv.appendChild(progDesc);            
        }

        document.getElementById(box.elementID).appendChild(outerDiv);        
    }; 
    
    //Stat BOX -----------------------------------------------------------------
    export interface statBoxElements {
        elementID: string,
        icon: string,
        caption: string,
        count: string,
        hRef?: string,
        boxColor?: string,
        myBootstrap?:string       
    }

    function statBoxSamples(targetID: string) {
        var box1: statBoxElements = {
            elementID: targetID,
            icon: "fa fa-shopping-cart",
            caption: "New Orders",
            count: "150",
            boxColor: "bg-aqua",
            //hRef: "http://www.google.com"
        }

        addStatBox(box1);
        addStatBox({
            elementID: targetID,
            icon: "ion ion-stats-bars",
            caption: "Bounce Rate",
            count: '53<sup style="font-size: 20px">%</sup>',
            boxColor: "bg-green",
            //hRef: "http://www.google.com"
        });
        addStatBox({
            elementID: targetID,
            icon: "ion ion-person-add",
            caption: "User Registrations",
            count: "44",
            boxColor: "bg-yellow",
            //hRef: "http://www.google.com"
        });
        addStatBox({
            elementID: targetID,
            icon: "ion ion-pie-graph",
            caption: "Unique Visitors",
            count: "65",
            boxColor: "bg-red",
            //hRef: "http://www.google.com"
        })
    }

    //using createElement
    function addStatBox(box: statBoxElements) {
        //using createElement for leveraging validation of syntax. 
        var outerDiv = document.createElement("div");
        outerDiv.className = (box.myBootstrap == undefined) ? "col-lg-3 col-md-3 col-sm-6 col-xs-12" : box.myBootstrap;

        var boxDiv = document.createElement("div");
        boxDiv.className = (box.boxColor != undefined) ? "small-box " + box.boxColor : "small-box";

        var innerDiv = document.createElement("div");
        innerDiv.className = "inner";
        innerDiv.innerHTML = "<h3>" + box.count + "</h3> <p>" + box.caption + "</p>";

        var iconDiv = document.createElement("div");
        iconDiv.className = "icon";

        var iOne = document.createElement("i");
        iOne.className = box.icon;

        var a = document.createElement("a");
        a.href = (box.hRef != undefined) ? box.hRef: "#";
        a.className = "small-box-footer";
        a.innerHTML = 'More Info <i class="fa fa-arrow-circle-right"></i>';

        outerDiv.appendChild(boxDiv);
        boxDiv.appendChild(innerDiv);
        boxDiv.appendChild(iconDiv);
        boxDiv.appendChild(a);
        iconDiv.appendChild(iOne);
                        
        document.getElementById(box.elementID).appendChild(outerDiv);
    };    

    //Standard BOX -----------------------------------------------------------------
    
    function standardBoxSamples(targetID: string) {

        var myBody = bodyBuilder({ customBoxBody: "The Body of the Box" });

        //Simple Boxes
        genericBox({
            elementId: targetID,            
            headerContent: headerBuilder({
                title: "Expandable",
                tools: { hasCollapsible: { isCollapsed: false } }
            }),            
            bodyContent: myBody,
            boxType: "box box-default",           
            myBootstrap: "col-lg-3 col-md-3 col-sm-6 col-xs-12"
        })

        genericBox({
            elementId: targetID,            
            headerContent: headerBuilder({
                title: "Removable",
                tools: { hasRemovable: true }
            }),            
            bodyContent: bodyBuilder({ customBoxBody: "The Body of the Box" }),
            boxType: "box box-success",
            myBootstrap: "col-lg-3 col-md-3 col-sm-6 col-xs-12"
        })

        genericBox({
            elementId: targetID,            
            headerContent: headerBuilder({
                title: "Collapsible",
                tools: { hasCollapsible: { isCollapsed: true} }
            }),            
            bodyContent: bodyBuilder({ customBoxBody: "The Body of the Box" }),
            boxType: "box box-warning",
            myBootstrap: "col-lg-3 col-md-3 col-sm-6 col-xs-12",
            isCollapsed: true

        })

        genericBox({
            elementId: targetID,
            headerContent: headerBuilder({
                title: "Loading State"
            }),            
            bodyContent: bodyBuilder({ customBoxBody: "The Body of the Box" }),
            boxType: "box box-danger",
            myBootstrap: "col-lg-3 col-md-3 col-sm-6 col-xs-12"
        })


        //Solid
        genericBox({
            elementId: targetID,            
            headerContent: headerBuilder({
                title: "Expandable",
                tools: { hasCollapsible: {isCollapsed:false}}
            }),            
            bodyContent: bodyBuilder({ customBoxBody: "The Body of the Box" }),
            boxType: "box box-default",
            myBootstrap: "col-lg-3 col-md-3 col-sm-6 col-xs-12",
            isSolid: true
        })

        genericBox({
            elementId: targetID,            
            headerContent: headerBuilder({
                title: "Removable",
                tools: { hasRemovable: true }
            }),            
            bodyContent: bodyBuilder({ customBoxBody: "The Body of the Box" }),
            boxType: "box box-success",
            myBootstrap: "col-lg-3 col-md-3 col-sm-6 col-xs-12",
            isSolid: true
        })

        genericBox({
            elementId: targetID,            
            headerContent: headerBuilder({
                title: "Collapsible",
                tools: {hasCollapsible: { isCollapsed: true }}
            }),            
            bodyContent: bodyBuilder({ customBoxBody: "The Body of the Box" }),
            boxType: "box box-warning",
            myBootstrap: "col-lg-3 col-md-3 col-sm-6 col-xs-12",
            isSolid: true,
            isCollapsed:true
            
        })

        genericBox({
            elementId: targetID,            
            headerContent: headerBuilder({
                title: "Loading State",                
            }),            
            bodyContent: bodyBuilder({ customBoxBody: "The Body of the Box" }),
            boxType: "box box-danger",
            myBootstrap: "col-lg-3 col-md-3 col-sm-6 col-xs-12",
            isSolid:true
        })
        //        
    };    
    
    //Direct Chat -----------------------------------------------------------------
       
    function directChatSamples(targetID: string) {     
    
        var msg1: directChatMsg = {
            msgName: "Alexander Pierce",
            timeStamp: "23 Jan 2:00 pm",
            chatImg: "/Content/adminlte/img/avatar.png",
            chatText: "Is this template really for free? That's unbelievable!",
            chatOnRight: false
        };
        var msg2: directChatMsg = {
            msgName: "Sarah Bullock",
            timeStamp: "23 Jan 2:05 pm",
            chatImg: "/Content/adminlte/img/avatar2.png",
            chatText: "You better believe it!",
            chatOnRight: true
        };
        var contact1: directChatContact = {
            contactImage: "/Content/adminlte/img/avatar.png",
            contactName: "Count Dracula",
            contactDate: "2/28/2015",
            contactText: "How have you been? I was...",
            hRef: "#"
        };                
        var myMessages: directChatMsg[] = [msg1, msg2];
        var myContacts: directChatContact[] = [contact1];        
        var myHeader = headerBuilder({
            tools: {
                hasBadge: { badgeMessage: "3 New", badgeColor: "bg-light-blue" },
                hasRemovable: true,
                hasCollapsible: {isCollapsed:false},
                hasChatPane: true,},
            title: "Direct Chat"            
        });

        genericBox({
            boxType: "box box-primary direct-chat direct-chat-primary",
            elementId: targetID,
            myBootstrap: "col-lg-3 col-md-3 col-sm-6 col-xs-12",
            bodyContent: bodyBuilder({ directChatVals: { chatContacts: myContacts, chatMessages: myMessages } }),
            headerContent: myHeader,
            footerContent: footerBuilder({ chatAction: "#" }),
        });

        genericBox({
            boxType: "box box-success direct-chat direct-chat-success",
            elementId: targetID,
            myBootstrap: "col-lg-3 col-md-3 col-sm-6 col-xs-12",
            bodyContent: bodyBuilder({ directChatVals: { chatContacts: myContacts, chatMessages: myMessages } }),
            headerContent: myHeader,
            footerContent: footerBuilder({ chatAction: "#"}),
        });

        genericBox({
            boxType: "box box-warning direct-chat direct-chat-warning",
            elementId: targetID,
            myBootstrap: "col-lg-3 col-md-3 col-sm-6 col-xs-12",
            bodyContent: bodyBuilder({ directChatVals: { chatContacts: myContacts, chatMessages: myMessages } }),
            headerContent: myHeader,
            footerContent: footerBuilder({ chatAction: "#"}),
        });

        genericBox({
            boxType: "box box-danger direct-chat direct-chat-danger",
            elementId: targetID,
            myBootstrap: "col-lg-3 col-md-3 col-sm-6 col-xs-12",
            bodyContent: bodyBuilder({ directChatVals: { chatContacts: myContacts, chatMessages: myMessages } }),
            headerContent: myHeader,
            footerContent: footerBuilder({ chatAction: "#"}),            
        });                                
    };        

    // Social Widgets -------------------------------------------------------------
              
    function userWidgetSamples(targetID: string) {
        
        var userStats: userStatElements[] = [{
            statName: "Projects",
            statValue: "31",
            statColor: "bg-blue",
            hRef: "#"
        },
        {
            statName: "Tasks",
            statValue: "5",
            statColor: "bg-aqua",
            hRef: "#"
        },
        {
            statName: "Completed Projects",
            statValue: "12",
            statColor: "bg-green",
            hRef: "#"
        },
        {
            statName: "Followers",
            statValue: "842",
            statColor: "bg-red",
            hRef: "https://www.google.com"
        }];
        var userStats2: userStatElements[] = [{
            statName: "SALES",
            statValue: "3,200"
        }, {
            statName: "Followers",
            statValue: "842",
            statColor: "bg-red",
            hRef: "https://www.google.com"
            }, {
                statName: "Products",
                statValue: "35"
        }];
        var myHeader1: userHeaderElement = {
            userName: "Nadia Carmichael",
            userDesc: "Lead Developer",
            userImage: "/Content/adminlte/img/avatar04.png"
        };
        var myHeader2: userHeaderElement = {
            userName: "Alexander Pierce",
            userDesc: "Founder & CEO",
            userImage: "/Content/adminlte/img/avatar.png"            
        };
        var myHeader3: userHeaderElement = {
            userName: "Elizabeth Pierce",
            userDesc: "Web Designer",
            userImage: "/Content/adminlte/img/avatar.png"
        };       
        
        genericBox({            
            bgColor: "bg-yellow",
            headerContent: headerBuilder({ userHeaderValues: myHeader1}),
            elementId: targetID,            
            footerContent: footerBuilder({ customBoxFooter: buildStatList({ isStacked: true, listValues: userStats })}),
            isWidget: true,
            myBootstrap: "col-lg-4 col-md-4 col-sm-6 col-xs-12",
            boxType: "box box-widget widget-user-2" ///<-notice difference in name->
        });

        genericBox({            
            bgColor: "bg-aqua-active",
            headerContent: headerBuilder({ userHeaderValues: myHeader2 }),
            elementId: targetID,
            footerContent: footerBuilder({ customBoxFooter: buildStatList({ isBlockStack: true, listValues: userStats2 }) }),
            isWidget: true,
            myBootstrap: "col-lg-4 col-md-4 col-sm-6 col-xs-12",
            boxType: "box box-widget widget-user"
        });

        genericBox({            
            bgImage: "/Content/adminlte/img/photo1.jpg",
            bgColor: "bg-aqua-active",
            headerContent: headerBuilder({ userHeaderValues: myHeader3 }),
            elementId: targetID,            
            footerContent: footerBuilder({ customBoxFooter: buildStatList({ isBlockStack: true, listValues: userStats2 }) }),
            isWidget: true,
            myBootstrap: "col-lg-4 col-md-4 col-sm-6 col-xs-12",
            boxType: "box box-widget widget-user"
        }); 
    };
                    
    //Comment Box -----------------------------------------------------------------
    
    function boxCommentSamples(targetID:string) {
                    
        var comment1: userStatElements = {
            commentImage: "/Content/adminlte/img/avatar3.png",
            statName: "Maria Gonzales",
            commentInsertDate: "8:03 PM Today",
            statValue: "It is a long established fact that a reader will be distracted " +
            "by the readable content of a page when looking at its layout."
        }

        var comment2: userStatElements = {
            commentImage: "/Content/adminlte/img/avatar.png",
            statName: "Nora Havisham",
            commentInsertDate: "8:03 PM Today",
            statValue: " The point of using Lorem Ipsum is that it has a more-or-less normal distribution of " +
            "letters, as opposed to using 'Content here, content here', making it look like readable English."
        }                    

        var myAttachment: attachmentElements = {
            attachImg: "/Content/adminlte/img/photo1.jpg",
            attachHeadHref: "http://www.lipsum.com/",
            attachHeadText: "Lorem ipsum text generator",
            attachBodytext: "Description about the attachment can be placed here.Lorem Ipsum is " +
            "simply dummy text of the printing and typesetting industry...",
            attachBodyHref: "#"
        }; 

        var myCommentPost1: commentPostElements = {
            commentMsg: "<p>Far far away, behind the word mountains, far from the countries Vokalia and " +
            "Consonantia, there live the blindtexts.Separated they live in Bookmarksgrove right at</p>" +
            "<p>the coast of the Semantics, a large language ocean.A small river named Duden flows by " +
            "their place and supplies it with the necessary regelialia.It is a paradisematic country, " +
            "in which roasted parts of sentences fly into your mouth.</p>",
            commentStats: "45 likes - 2 comments",
            commentImg: "/Content/adminlte/img/photo1.jpg"
        };        

        var myCommentPost2: commentPostElements = {
            commentMsg: "<p>Far far away, behind the word mountains, far from the countries Vokalia and " +
            "Consonantia, there live the blindtexts.Separated they live in Bookmarksgrove right at</p>" +
            "<p>the coast of the Semantics, a large language ocean.A small river named Duden flows by " +
            "their place and supplies it with the necessary regelialia.It is a paradisematic country, " +
            "in which roasted parts of sentences fly into your mouth.</p>",
            commentStats: "45 likes - 2 comments",
            attachmentVals: myAttachment
        };        

        var userComments: userStatElements[] = [comment1, comment2];
        var comList = buildStatList({isCommentList: true,listValues: userComments});        
        var myHeader = headerBuilder({
            commentHeaderValues: {
                userName: "Jonathan Burke Jr.",
                userDesc: "Shared Publicly - 7:30PM Today",
                userImage: "/Content/adminlte/img/avatar5.png",
            },            
            tools: { hasCollapsible: {isCollapsed:false}, hasRemovable:true, hasMarkRead:true}

        });        
        var myFooter = footerBuilder({ commentVals: { commentList: comList, commentPostImg: "/Content/adminlte/img/avatar5.png"}});
        
        genericBox({
            elementId: targetID,
            headerContent: myHeader,
            bodyContent: bodyBuilder({ commentVals: myCommentPost1 }),
            footerContent: myFooter,
            myBootstrap: "col-lg-4 col-md-4 col-sm-6 col-xs-12"
        });

        genericBox({
            elementId: targetID,
            headerContent: myHeader,
            bodyContent: bodyBuilder({ commentVals: myCommentPost2}),
            footerContent: myFooter,
            myBootstrap: "col-lg-4 col-md-4 col-sm-6 col-xs-12"            
        });
    }       

    //Monthly Recap Report-----------------------------------------------------------------

    function dashboardV2Samples(targetID:string) {

        var dList = '<li><a href="#">Action</a></li>' +
            '<li><a href="#">Another action</a></li >' +
            '<li><a href="#">Something else here</a></li>' +
            '<li class="divider"></li>' +
            '<li><a href="#">Separated link</a></li>';

        var myFooterList: userStatElements[] = [
            {
                statName: "Total Revenue",
                statValue: "$35,210.43",
                changeDirection: "up",
                changePrcnt: "17%"
            },
            {
                statName: "Total Cost",
                statValue: "$10,390.90",
                changeDirection: "no-change",
                changePrcnt: "0%"
                
            },
            {
                statName: "Total Profit",
                statValue: "$24,813.53",
                changeDirection: "up",
                changePrcnt: "20%"
            },
            {
                statName: "Goal Completionos",
                statValue: "1200",
                changeDirection: "down",
                changePrcnt: "18%"
            }];
        
        genericBox({
            elementId: targetID,
            headerContent: headerBuilder({
                title: "Monthly Recap Report",
                tools: { hasCollapsible: { isCollapsed: false }, hasRemovable: true, hasDropdown: {dropDownList:dList}}
            }),
            bodyContent: bodyBuilder({ customBoxBody: "this is the body" }),
            footerContent: footerBuilder({ customBoxFooter: buildStatList({ isBlockWChange: true, listValues: myFooterList }) }),
            myBootstrap: "col-md-12",
            boxType:"box"
        })

    }

    export interface chartElements {
    }
    
    function buildChartwithLegend(){

    }

    //-----------------------------------------------------------------------------------------------
    //sample html text in box footer for Change List
        
    export interface chartLegendElements {
        chartTitle: string,
        chartCount: string,
        chartColor: string
    }
    function setChart(legendValues: chartLegendElements[], chartVals: setChartElements) {

        var row = document.createElement("div");
        row.className = "row";

        var pieBox = document.createElement("div");
        pieBox.className = "col-md-8";

        var pieChart = document.createElement("div");
        pieChart.className = "chart-responsive";
        pieBox.appendChild(pieChart);

        var pieCanvas = document.createElement("canvas");
        pieCanvas.id = chartVals.chartID;
        pieCanvas.height = chartVals.chartHeight;                                                                
        pieChart.appendChild(pieCanvas);
        
        var listBox = document.createElement("div");
        listBox.className = "col-md-4";

        var list = document.createElement("ul");
        list.className = "chart-legend clearfix";
        listBox.appendChild(list);

        for (var i in legendValues) {
            var currentEntry: chartLegendElements = legendValues[i];

            var entry = document.createElement("li");
            
            var entryI = document.createElement("i");
            var color = (currentEntry.chartColor != undefined) ? currentEntry.chartColor : "text-red";
            entryI.className = "fa fa-circle-o " + color;
            entry.appendChild(entryI);
            entry.innerHTML = entry.innerHTML + currentEntry.chartTitle;

            list.appendChild(entry);            
        }

        row.appendChild(pieBox);
        row.appendChild(list);

        var myReturn = row.innerHTML;

        return myReturn;
    }

    export interface setChartElements {
        chartHeight: number,
        chartID: string
    }

    //-----------------------------------------------------------

    export interface chartBoxElements{
        elementID: string,
        boxBody: string,
        title: string,
        boxType: "box-default" | "box-success" | "box-warning" | "box-danger",
        hasTool?: boolean,
        isLoading?: boolean,
        collapsible?: boolean,
        isRemove?: boolean,
        isCollapsed?: boolean,
        isSolid?: boolean,
        hasFooter?: boolean,
        footerBody?: string,
        myBootstrap?: string,
        hasDropMenu?: boolean,
        dropMenuTitles?: string[],
        dropMenuHRefs?: string[]

        }

    function addChartBox(box: chartBoxElements) {

        var collapsed = (box.collapsible == true) ? (box.isCollapsed == true) ? "collapsed-box" : "" : "";
        var boxSolid = (box.isSolid == true) ? "box-solid" : "";


        var outerDiv = document.createElement("div");
        outerDiv.className = (box.myBootstrap == undefined) ? "col-lg-3 col-md-3 col-sm-6 col-xs-12" : box.myBootstrap;

        var boxDiv = document.createElement("div");
        boxDiv.className = "box " + box.boxType + " " + collapsed + " " + boxSolid;

        var boxHeader = document.createElement("div");
        boxHeader.className = "box-header with-border";
        boxHeader.innerHTML = ' <h3 class="box-title">' + box.title + '</h3>';

        if (box.hasTool == true) {

            var boxTools = document.createElement("div");
            boxTools.className = "box-tools pull-right";

            if (box.collapsible == true) {
                var button = document.createElement("button");
                button.className = "btn btn-box-tool";
                button.setAttribute("data-widget", "collapse");


                var toolIcon = document.createElement("i");
                toolIcon.className = (box.isCollapsed == true) ? "fa fa-plus" : "fa fa-minus";

                boxHeader.appendChild(boxTools);
                boxTools.appendChild(button);
                button.appendChild(toolIcon);
            }

            if (box.hasDropMenu == true) {
                var btngroup = document.createElement("div");
                btngroup.className = "btn-group";

                var button = document.createElement("button");
                button.className = "btn btn-box-tool dropdown-toggle";
                button.setAttribute("data-toggle", "dropdown");

                var toolIcon = document.createElement("i");
                toolIcon.className = "fa fa-wrench";

                var dropList = document.createElement("ul");
                dropList.className = "drop-menu";
                dropList.setAttribute("role", "menu");

                for (var p in box.dropMenuTitles) {

                    var currentTitle = box.dropMenuTitles[p];
                    var currentHref = box.dropMenuHRefs[p];

                    var entry = document.createElement("li");
                    var entryA = document.createElement("a");
                    entryA.href = currentHref;
                    entryA.innerHTML = currentTitle;
                    entry.appendChild(entryA);
                    dropList.appendChild(entry);
                }

                boxHeader.appendChild(boxTools);
                boxTools.appendChild(button);
                button.appendChild(toolIcon);
                btngroup.appendChild(button);
            }

            if (box.isRemove == true) {
                var button = document.createElement("button");
                button.className = "btn btn-box-tool";
                button.setAttribute("data-widget", "remove");

                var toolIcon = document.createElement("i");
                toolIcon.className = "fa fa-times";

                boxHeader.appendChild(boxTools);
                boxTools.appendChild(button);
                button.appendChild(toolIcon);
            }
        };

    }
//---------------------------------------------------------------------


    function testGeneric(elementID: string) {

        var myChartLegend: chartLegendElements[] = [
            {
                chartTitle: "Chrome",
                chartCount: "",
                chartColor: "text-red"
            },
            {
                chartTitle: "IE",
                chartCount: "",
                chartColor: "text-green"
            },
            {
                chartTitle: "Firefox",
                chartCount: "",
                chartColor: "text-yellow"
            },
            {
                chartTitle: "Safari",
                chartCount: "",
                chartColor: "text-aqua"
            },
            {
                chartTitle: "Opera",
                chartCount: "",
                chartColor: "text-light-blue"
            },
            {
                chartTitle: "Navigator",
                chartCount: "",
                chartColor: "text-grey"
            }];

        var chartVals: setChartElements = { chartHeight: 150, chartID: "pieChart" };

        var myfooterList: userStatElements[] = [{
            statName: "United States of America",
            statValue: "12%",
            changeDirection: "down"
        },
        {
            statName: "India",
            statValue: "4%",
            changeDirection: "up"
        },
        {
            statName: "China",
            statValue: "0%",
            changeDirection: "no-change"
        }];

        var list1 = '<li><a href="#">Action</a></li>' +
            '<li><a href="#">Another action</a></li >' +
            '<li><a href="#">Something else here</a></li>' +
            '<li class="divider"></li>' +
            '<li><a href="#">Separated link</a></li>';

        var pagiList = '<li><a href="#">&laquo;</a></li>' +
            '<li><a href="#"> 1 </a></li>' +
            '<li><a href="#"> 2 </a></li>' +
            '<li><a href="#"> 3 </a></li>' +
            '<li><a href="#"> 4 </a></li>' +
            '<li><a href="#">&raquo; </a></li>';

        var myHeader = headerBuilder({
            title: "Test Generic Box",
            tools: {
                hasCollapsible: { isCollapsed: false },
                hasRemovable: true,
                hasBadge: { badgeMessage: "3", badgeColor: "bg-light-blue" },
                hasDropdown: {dropDownList:list1}
            }            
        });
        var myFooter = footerBuilder({
            commentVals: {
                commentList: buildStatList({ isChangeList: true, listValues: myfooterList }),
                commentPostImg: "/Content/adminlte/img/avatar.png",
            },
            linkHref: "#"
            
        });
        var myBody = bodyBuilder({});
        var changeList = buildStatList({ isChangeList: true, listValues: myfooterList });

        genericBox({
            elementId: elementID,            
            headerContent: myHeader,           
            bodyContent: myBody,           
            footerContent:myFooter,
            isSolid: true                        
        });
    }

    export interface genericBoxElements {
        elementId: string,
        myBootstrap?: string,        
        boxType?: string, //boxType: "box box-default" | "box box-default" | "box box-default" | "box box-default",
        bgImage?: string,
        bgColor?:string,
        isWidget?: boolean,
        isSolid?: boolean,                
        headerContent?:string        
        bodyContent?: string,        
        footerContent?: string,
        customBoxContent?: string
        isCollapsed?:boolean
    }

    function genericBox(genBox: genericBoxElements) {

        var container = document.createElement("div");
        container.className = (genBox.myBootstrap == undefined) ? "col-lg-4 col-md-4 col-sm-6 col-xs-12" : genBox.myBootstrap;
                
        var box = document.createElement("div");                        
        box.className = (genBox.boxType == undefined) ? "box box-default" : genBox.boxType;
        

        if (genBox.isWidget == true) {
            box.className = (genBox.boxType == undefined) ? "box box-widget widget-user": genBox.boxType;
        }
        if (genBox.isSolid == true) {
            box.className = box.className + " box-solid";
        }

        if (genBox.isCollapsed == true) {
            box.className = box.className + " collapsed-box";
        }

        container.appendChild(box)

        if (genBox.headerContent != undefined) {

            var header = document.createElement("div");
            header.id = "header";
            header.className = (genBox.bgColor == undefined) ? "box-header with-border" : "box-header with-border " + genBox.bgColor;

            if (genBox.isWidget == true) {
                header.className = (genBox.bgColor == undefined) ? "widget-user-header bg-black" :"widget-user-header "+ genBox.bgColor;
                if (genBox.bgImage != undefined) {
                    header.style.background = "url('" + genBox.bgImage + "') center center";
                }
            }            
            
            header.innerHTML = genBox.headerContent;
            box.appendChild(header);
        }

        if (genBox.bodyContent != undefined) {

            var body = document.createElement("div");
            body.id = "body";
            body.className = "box-body";
            body.innerHTML = genBox.bodyContent;
            box.appendChild(body);
        }

        if (genBox.footerContent != undefined) {

            var footer = document.createElement("div");
            footer.id = "footer";
            footer.className = "box-footer";
            footer.innerHTML = genBox.footerContent;
            box.appendChild(footer);
        }

        box.innerHTML = (genBox.customBoxContent == undefined) ? box.innerHTML : box.innerHTML + genBox.customBoxContent;

        document.getElementById(genBox.elementId).appendChild(container);
    }

    export interface headerElements {
        title?: string,        
        tools?: toolElements,
        hasTools?: boolean,            
        customBoxHeader?: string,
        userHeaderValues?: userHeaderElement,
        commentHeaderValues?: commentHeaderElement
    }

    export interface toolElements {
        hasCollapsible?: collapseElements,
        hasRemovable?: boolean,
        hasChatPane?: boolean, 
        hasMarkRead?: boolean,
        hasBadge?: badgeElements,
        hasDropdown?: dropDownElements,
        hasPagination?: paginationElements,
        hasStatus?: boolean,
    }

    export interface badgeElements {
        badgeMessage?: string,
        badgeColor?: string,
    }

    export interface dropDownElements {        
        dropDownList?: string,
    }

    export interface paginationElements {        
        paginationList?: string,
    }
    export interface collapseElements {        
        isCollapsed?: boolean,
    }

    export interface userHeaderElement {
        userName: string,
        userDesc?: string,
        userImage?: string        
    }

    export interface commentHeaderElement{
        userName: string,
        userDesc?: string,
        userImage?: string
        userHref?: string
    }

    function headerBuilder(box:headerElements) {

        var boxHeader = document.createElement("div");                               

        if (box.title != undefined) {
            
            boxHeader.innerHTML = '<h3 class="box-title">' + box.title + '</h3>';
        }

        if (box.tools!= undefined) {

            var boxTools = document.createElement("div");
            boxTools.className = "box-tools pull-right";
            boxHeader.appendChild(boxTools);
            
            if (box.tools.hasChatPane != undefined) {                               

                var toolButton = document.createElement("button");
                toolButton.className = "btn btn-box-tool";
                toolButton.setAttribute("data-widget", "chat-pane-toggle");
                toolButton.setAttribute("data-toggle", "tooltip")
                toolButton.title = "Contacts";
                boxTools.appendChild(toolButton);

                var toolIcon = document.createElement("i");
                toolIcon.className = "fa fa-comments";
                toolButton.appendChild(toolIcon);                 
            }

            if (box.tools.hasBadge != undefined) {

                var badge: badgeElements = box.tools.hasBadge;

                var toolSpan = document.createElement("span");
                toolSpan.className = "badge " + badge.badgeColor;                
                toolSpan.setAttribute("data-toggle", "tooltip")
                toolSpan.title = (badge.badgeMessage == undefined) ? "Nothing New" : badge.badgeMessage;
                toolSpan.innerHTML = (badge.badgeMessage == undefined) ? "" : badge.badgeMessage;
                boxTools.appendChild(toolSpan);                     
            }

            if (box.tools.hasMarkRead != undefined) {
                                                
                var toolButton = document.createElement("button");
                toolButton.className = "btn btn-box-tool";
                toolButton.setAttribute("data-toggle", "tooltip")
                toolButton.title = "Mark as Read";
                boxTools.appendChild(toolButton);

                var toolIcon = document.createElement("i");
                toolIcon.className = "fa fa-circle-o";
                toolButton.appendChild(toolIcon);
            }

            if (box.tools.hasPagination != undefined) {

                var pagination: paginationElements = box.tools.hasPagination;

                var pgList = document.createElement("ul");
                pgList.className = "pagination pagination-sm inline";                
                pgList.innerHTML = pagination.paginationList;
                boxTools.appendChild(pgList);           
            }

            if (box.tools.hasStatus != undefined) {
                
                var btnGroup = document.createElement("div");
                btnGroup.className = "btn-group with-border";                
                btnGroup.setAttribute("data-toggle", "btn-toggle")

                var button1 = document.createElement("button");
                button1.className = "btn btn-default btn-sm with-border active";                
                button1.type = "radio";
                button1.setAttribute("data-toggle", "tooltip")
                button1.title = "Online";                
                btnGroup.appendChild(button1);

                var button1Icon = document.createElement("i");
                button1Icon.className = "fa fa-square text-green";
                button1.appendChild(button1Icon);

                var button2= document.createElement("button");
                button2.className = "btn btn-default btn-sm with-border";              
                button2.type = "radio";
                button2.setAttribute("data-toggle", "tooltip")
                button2.title = "Offline";                
                btnGroup.appendChild(button2);

                var button2Icon = document.createElement("i");
                button2Icon.className = "fa fa-square text-red";
                button2.appendChild(button2Icon);
                
                var dropGroup = document.createElement("div");
                dropGroup.className = "btn-group";
                dropGroup.setAttribute("data-toggle", "tooltip")
                dropGroup.title = "Status";           
                boxTools.appendChild(dropGroup);

                var toolButton = document.createElement("button");
                toolButton.className = "btn btn-box-tool dorpdown-toggle";
                toolButton.setAttribute("data-toggle", "dropdown");                
                dropGroup.appendChild(toolButton);

                var toolIcon = document.createElement("i");
                toolIcon.className = "fa fa-star-o";                     
                toolButton.appendChild(toolIcon);

                var btnList = document.createElement("ul");
                btnList.className = "dropdown-menu";
                btnList.setAttribute("role", "menu");
                btnList.innerHTML = btnGroup.innerHTML;
                dropGroup.appendChild(btnList);

            }

            if (box.tools.hasCollapsible !=undefined) {

                var collapsible: collapseElements = box.tools.hasCollapsible;

                var toolButton = document.createElement("button");
                toolButton.className = "btn btn-box-tool";
                toolButton.setAttribute("data-widget", "collapse");
                toolButton.setAttribute("data-toggle", "tooltip")
                toolButton.title = "Collapse/Expand";
                boxTools.appendChild(toolButton);

                var toolIcon = document.createElement("i");
                toolIcon.className = (collapsible.isCollapsed == true) ? "fa fa-plus" : "fa fa-minus";
                toolButton.appendChild(toolIcon);
            }

            if (box.tools.hasDropdown != undefined) {

                var dropDown: dropDownElements = box.tools.hasDropdown;

                var btnGroup = document.createElement("div");
                btnGroup.className = "btn-group";
                btnGroup.setAttribute("data-toggle", "tooltip")
                btnGroup.title = "Options";
                boxTools.appendChild(btnGroup);

                var toolButton = document.createElement("button");
                toolButton.className = "btn btn-box-tool dorpdown-toggle";
                toolButton.setAttribute("data-toggle", "dropdown");
                btnGroup.appendChild(toolButton);

                var toolIcon = document.createElement("i");
                toolIcon.className = "fa fa-bars";
                toolButton.appendChild(toolIcon);

                var btnList = document.createElement("ul");
                btnList.className = "dropdown-menu";
                btnList.setAttribute("role", "menu");
                btnList.innerHTML = dropDown.dropDownList;
                btnGroup.appendChild(btnList);                
            }

            if (box.tools.hasRemovable != undefined) {

                var toolButton = document.createElement("button");
                toolButton.className = "btn btn-box-tool";                
                toolButton.setAttribute("data-widget", "remove");
                toolButton.setAttribute("data-toggle", "tooltip")
                toolButton.title = "Remove";
                boxTools.appendChild(toolButton);

                var toolIcon = document.createElement("i");
                toolIcon.className = "fa fa-times";
                toolButton.appendChild(toolIcon);
            }
        }

        if (box.userHeaderValues != undefined) {
            var userImage = document.createElement("div");
            userImage.className = "widget-user-image";

            if (box.userHeaderValues.userImage != undefined) {
                var Image = document.createElement("img");
                Image.className = "img-circle";
                Image.alt = "User Avatar";
                Image.src = box.userHeaderValues.userImage;
                userImage.appendChild(Image);
            }

            var userName = document.createElement("h3");
            userName.className = "widget-user-username";
            userName.innerHTML = (box.userHeaderValues.userName != undefined) ? box.userHeaderValues.userName : "";

            var userDescription = document.createElement("h5");
            userDescription.className = "widget-user-desc";
            userDescription.innerHTML = (box.userHeaderValues.userDesc != undefined) ? box.userHeaderValues.userDesc : "";

            boxHeader.appendChild(userImage);
            boxHeader.appendChild(userName);
            boxHeader.appendChild(userDescription);
        }

        if (box.commentHeaderValues != undefined) {
            var headerUser = document.createElement("div");
            headerUser.className = "user-block";

            if (box.commentHeaderValues.userImage != undefined) {
                var Image = document.createElement("img");
                Image.className = "img-circle";
                Image.alt = "User image";
                Image.src = box.commentHeaderValues.userImage;
                headerUser.appendChild(Image);
            }

            var Name = document.createElement("span");
            Name.className = "username";
            headerUser.appendChild(Name);

            var NameA = document.createElement("a");
            NameA.href = (box.commentHeaderValues.userHref != undefined) ? box.commentHeaderValues.userHref : "#";
            NameA.innerHTML = (box.commentHeaderValues.userName != undefined) ? box.commentHeaderValues.userName : "";
            Name.appendChild(NameA);

            var Description = document.createElement("span");
            Description.className = "description";
            Description.innerHTML = (box.commentHeaderValues.userDesc != undefined) ? box.commentHeaderValues.userDesc : "";
            headerUser.appendChild(Description);

            boxHeader.appendChild(headerUser);
        }

        boxHeader.innerHTML = (box.customBoxHeader == undefined) ? boxHeader.innerHTML : boxHeader.innerHTML + box.customBoxHeader;
        return boxHeader.innerHTML;
    }


    export interface bodyElements {
        customBoxBody?: string,        
        commentVals?: commentPostElements,
        directChatVals?: directChatElements,
    }

    export interface directChatElements {
        chatMessages: directChatMsg[],
        chatContacts: directChatContact[]
    }

    export interface directChatMsg {
        msgName: string,
        timeStamp: string,
        chatImg: string,
        chatText: string,
        chatOnRight?: boolean
    }

    export interface directChatContact {
        contactImage: string,
        contactName: string,
        contactDate: string,
        contactText: string,
        hRef?: string
    }
       
    export interface commentPostElements {
        commentImg?: string,
        commentMsg?: string,
        commentStats?: string
        attachmentVals?: attachmentElements,
    }

    export interface attachmentElements {
        attachImg?: string,
        attachHeadHref?: string,
        attachHeadText?: string,
        attachBodyHref?: string
        attachBodytext?: string
    }

    function bodyBuilder(box: bodyElements) {

        var boxBody = document.createElement("div");    

        if (box.directChatVals != undefined) {

            if (box.directChatVals.chatMessages!=undefined) {

                var chatMsgs: directChatMsg[] = box.directChatVals.chatMessages;

                var directChatMessages = document.createElement("div");
                directChatMessages.className = "direct-chat-messages";
                directChatMessages.id = "chat-messages";

                //for each message//
                for (var j = 0; j < chatMsgs.length; j++) {

                    var msg: directChatMsg = chatMsgs[j];

                    var chatboxDirection = (msg.chatOnRight == true) ? "direct-chat-msg right" : "direct-chat-msg ";
                    var chatNameDirection = (msg.chatOnRight == true) ? "direct-chat-name pull-right" : "direct-chat-name pull-left";
                    var chatTimeDirection = (msg.chatOnRight == true) ? "direct-chat-timestamp pull-left" : "direct-chat-timestamp pull-right"

                    var chatMessage = document.createElement("div");
                    chatMessage.className = chatboxDirection;

                    var directChatInfo = document.createElement("div");
                    directChatInfo.className = "direct-chat-info clearfix";

                    var spanName = document.createElement("span");
                    spanName.className = chatNameDirection;
                    spanName.innerHTML = msg.msgName;

                    var spanTimestamp = document.createElement("span");
                    spanTimestamp.className = chatTimeDirection;
                    spanTimestamp.innerHTML = msg.timeStamp;

                    directChatInfo.appendChild(spanName);
                    directChatInfo.appendChild(spanTimestamp);

                    var directChatImage = document.createElement("img");
                    directChatImage.className = "direct-chat-img";
                    directChatImage.src = msg.chatImg;
                    directChatImage.alt = "message user image"

                    var directChatText = document.createElement("div");
                    directChatText.className = "direct-chat-text";
                    directChatText.innerHTML = msg.chatText;

                    chatMessage.appendChild(directChatInfo);
                    chatMessage.appendChild(directChatImage);
                    chatMessage.appendChild(directChatText);
                    directChatMessages.appendChild(chatMessage);

                }
                boxBody.appendChild(directChatMessages);
            }
            //---------------------------------------------------

            if (box.directChatVals.chatContacts != undefined) {

                var contList: directChatContact[] = box.directChatVals.chatContacts;

                var directChatContacts = document.createElement("div");
                directChatContacts.className = "direct-chat-contacts";

                var contactList = document.createElement("ul");
                contactList.className = "contacts-list"
                directChatContacts.appendChild(contactList);

                //for each contact
                for (var w = 0; w < contList.length; w++) {

                    var contact: directChatContact = contList[w];

                    var contactEntry = document.createElement("li");

                    var a = document.createElement("a");
                    a.href = (contact.hRef != undefined) ? contact.hRef : "#";

                    var img = document.createElement("img");
                    img.className = "contacts-list-img"
                    img.src = contact.contactImage;

                    var contactInfo = document.createElement("div");
                    contactInfo.className = "contacts-list-info"

                    var contactSpanName = document.createElement("span");
                    contactSpanName.className = "contacts-list-name"
                    contactSpanName.innerHTML = contact.contactName;

                    var contDate = document.createElement("small");
                    contDate.className = "contacts-list-date pull-right";
                    contDate.innerHTML = contact.contactDate;

                    var contactSpanMsg = document.createElement("span");
                    contactSpanMsg.className = "contacts-list-msg";
                    contactSpanMsg.innerHTML = contact.contactText;

                    contactSpanName.appendChild(contDate);
                    contactInfo.appendChild(contactSpanName);
                    contactInfo.appendChild(contactSpanMsg);
                    a.appendChild(img);
                    a.appendChild(contactInfo);
                    contactEntry.appendChild(a);
                    contactList.appendChild(contactEntry);
                }
                //---------------------------------------------------
                boxBody.appendChild(directChatContacts);
            } 
        }        
               
        if (box.commentVals != undefined) {

            if (box.commentVals.commentImg != undefined) {
                var bodyImage = document.createElement("img");
                bodyImage.className = "img-responsive pad";
                bodyImage.alt = "Photo";
                bodyImage.src = box.commentVals.commentImg;
                boxBody.appendChild(bodyImage);
            }

            var bodyMessage = document.createElement("p");
            bodyMessage.className = "box-body";
            bodyMessage.innerHTML = box.commentVals.commentMsg;
            boxBody.appendChild(bodyMessage);            

            if (box.commentVals.attachmentVals != undefined) {
                var attachment: attachmentElements = box.commentVals.attachmentVals;

                var bodyAttachment = document.createElement("div");
                bodyAttachment.className = "attachment-block clearfix";

                var attachImg = document.createElement("img");
                attachImg.className = "attachment-img";
                attachImg.alt = "attachment image";
                attachImg.src = attachment.attachImg;
                bodyAttachment.appendChild(attachImg);

                var attachPush = document.createElement("div");
                attachPush.className = "attachment-pushed";
                bodyAttachment.appendChild(attachPush);

                var attachHeading = document.createElement("h4");
                attachHeading.className = "attachment-heading";
                attachPush.appendChild(attachHeading);

                var headingA = document.createElement("a");
                headingA.href = (attachment.attachHeadHref != undefined) ? attachment.attachHeadHref : "#";
                headingA.innerHTML = attachment.attachHeadText;
                attachHeading.appendChild(headingA);

                var attachText = document.createElement("div");
                attachText.className = "attachment-text";
                attachText.innerHTML = attachment.attachBodytext;
                attachPush.appendChild(attachText);

                var textA = document.createElement("a");
                textA.href = (attachment.attachBodyHref != undefined) ? attachment.attachBodyHref : "#";
                textA.innerHTML = "more";
                attachText.appendChild(textA);

                boxBody.appendChild(bodyAttachment);
            }

            var bodyShare = document.createElement("button");
            bodyShare.className = "btn btn-default btn-xs";
            var shareI = document.createElement("i");
            shareI.className = "fa fa-share";
            bodyShare.appendChild(shareI);
            bodyShare.innerHTML = "Share";

            var bodyLike = document.createElement("button");
            bodyLike.className = "btn btn-default btn-xs";
            var likeI = document.createElement("i");
            likeI.className = "fa fa-thumbs-o-up";
            bodyLike.appendChild(likeI);
            bodyLike.innerHTML = "Like";

            var bodySpan = document.createElement("span");
            bodySpan.className = "pull-right text-muted";
            bodySpan.innerHTML = box.commentVals.commentStats;

            //build rest of body               
            boxBody.appendChild(bodyShare);
            boxBody.appendChild(bodyLike);
            boxBody.appendChild(bodySpan);
        }
                
        boxBody.innerHTML = (box.customBoxBody == undefined) ? boxBody.innerHTML :boxBody.innerHTML + box.customBoxBody;
        return boxBody.innerHTML;
    }

    export interface footerElements {
        customBoxFooter?: string,        
        chatAction?: string,       
        commentVals?: commentElements,        
        linkHref?:string
    }

    export interface commentElements {
        commentAction?: string,
        commentList?: string,
        commentPostImg?: string,
    }

    function footerBuilder(box: footerElements) {
        var boxFooter = document.createElement("div");        
        
        if (box.chatAction != undefined){

            var formDiv = document.createElement("form");
            formDiv.action = box.chatAction;
            formDiv.method = "post";

            var inputDiv = document.createElement("div");
            inputDiv.className = "input-group";

            var inputArea = document.createElement("input");
            inputArea.type = "text";
            inputArea.name = "message";
            inputArea.placeholder = "Type Message...";
            inputArea.className = "form-control";

            var inputSpan = document.createElement("span");
            inputSpan.className = "input-group-btn";

            var inputButton = document.createElement("button");
            inputButton.type = "submit";
            inputButton.className = "btn btn-primary btn-flat";
            inputButton.innerHTML = "Send";

            //Build Footer
            inputSpan.appendChild(inputButton);
            inputDiv.appendChild(inputArea);
            inputDiv.appendChild(inputSpan);
            formDiv.appendChild(inputDiv);
            boxFooter.appendChild(formDiv);
        }
                
        if (box.commentVals != undefined) {
                                   
            //Footer
            boxFooter.className = "box-footer";

            var footerForm = document.createElement("form");
            footerForm.action = (box.commentVals.commentAction == undefined) ? "#" : box.commentVals.commentAction;
            footerForm.method = "post";

            var formImg = document.createElement("img");
            formImg.className = "img-responsive img-circle img-sm";
            formImg.alt = "alt text";
            formImg.src = box.commentVals.commentPostImg;
            footerForm.appendChild(formImg);

            var formPush = document.createElement("div");
            formPush.className = "img-push";
            footerForm.appendChild(formPush);

            var pushInput = document.createElement("input");
            pushInput.type = "text";
            pushInput.className = "form-control input-sm";
            pushInput.placeholder = "Press enter to post comment";
            formPush.appendChild(pushInput);

            var boxFooterComments = document.createElement("div");
            boxFooterComments.className = "box-footer box-comments";
            boxFooterComments.innerHTML = (box.commentVals.commentList == undefined) ? "" : box.commentVals.commentList;
            boxFooter.appendChild(boxFooterComments);
            boxFooter.appendChild(footerForm);
        }

        if (box.linkHref != undefined) {

            var a = document.createElement("a");
            a.href = (box.linkHref != undefined) ? box.linkHref: "#";
            a.className = "small-box-footer pull-right";            
            a.innerHTML = 'More Info ';
            boxFooter.appendChild(a);

            var i = document.createElement("i");
            i.className = "fa fa-arrow-circle-right"
            a.appendChild(i);                         
        }

        boxFooter.innerHTML = (box.customBoxFooter == undefined) ? boxFooter.innerHTML : boxFooter.innerHTML + box.customBoxFooter;
        
        return boxFooter.innerHTML;
    }

    
    export interface userStatElements {
        statName: string,
        statValue: string,
        statColor?: string
        hRef?: string,        
        changeDirection?: "up" | "down" | "no-change",
        changePrcnt?:string,
        commentImage?: string,        
        commentInsertDate?: string,        
    }
    export interface statListElements {
        listValues: userStatElements[]
        isStacked?: boolean,
        isBlockStack?: boolean,
        isChangeList?: boolean,
        isCommentList?: boolean,
        isBlockWChange?:boolean,
    }

    function buildStatList(box: statListElements) {

        var currentList: userStatElements[] = box.listValues;

        var container = document.createElement("div");
                
        if (box.isStacked == true) {
            var myListUl = document.createElement("ul");
            myListUl.className = "nav nav-stacked ";

            for (var i = 0; i < currentList.length; i++) {

                var statEntry: userStatElements = currentList[i];

                var entryLi = document.createElement("li");

                var entryA = document.createElement("a");
                entryA.href = (statEntry.hRef != undefined) ? statEntry.hRef : "#";
                entryA.innerHTML = statEntry.statName;

                var entrySpan = document.createElement("span");
                entrySpan.className = (statEntry.statColor != undefined) ? "pull-right badge " + statEntry.statColor : "pull-right badge";
                entrySpan.innerHTML = statEntry.statValue;

                entryA.appendChild(entrySpan);
                entryLi.appendChild(entryA);
                myListUl.appendChild(entryLi);
            }

            //build footer
            container.appendChild(myListUl);
        }

        if (box.isBlockStack == true) {

            var myListDiv = document.createElement("div");
            myListDiv.className = "row ";

            for (var i = 0; i < currentList.length; i++) {

                var statEntry: userStatElements = currentList[i];

                var entryDiv = document.createElement("div");
                entryDiv.className = "col-sm-4 border-right";

                var entryBlock = document.createElement("div");
                entryBlock.className = "description-block";

                var entryHeader = document.createElement("h5");
                entryHeader.className = "description-header";
                entryHeader.innerHTML = statEntry.statValue;

                var entryText = document.createElement("span");
                entryText.className = "description-text";
                entryText.innerHTML = statEntry.statName;

                entryBlock.appendChild(entryHeader);
                entryBlock.appendChild(entryText);
                entryDiv.appendChild(entryBlock);
                myListDiv.appendChild(entryDiv);
            }
            container.appendChild(myListDiv);
        }

        if (box.isBlockWChange == true) {

            var myListDiv = document.createElement("div");
            myListDiv.className = "row ";

            for (var i = 0; i < currentList.length; i++) {

                var statEntry: userStatElements = currentList[i];

                var entryDiv = document.createElement("div");
                entryDiv.className = "col-sm-3 copl-xs-6 border-right";

                var entryBlock = document.createElement("div");
                entryBlock.className = "description-block border-right";

                var entryChange = document.createElement("span");
                var textColor = (statEntry.changeDirection == "up") ? " text-green " : (statEntry.changeDirection == "down") ? " text-red " : (statEntry.changeDirection == "no-change") ? " text-yellow " : "";
                entryChange.className = "description-percetage " + textColor;

                var entryI = document.createElement("i");
                entryI.className = (statEntry.changeDirection == "up") ? "fa fa-angle-up" : (statEntry.changeDirection == "down") ? "fa fa-angle-down" : (statEntry.changeDirection == "no-change") ? "fa fa-angle-left" : "";
                entryChange.appendChild(entryI);
                entryChange.innerHTML = entryChange.innerHTML + " " + statEntry.changePrcnt;

                var entryHeader = document.createElement("h5");
                entryHeader.className = "description-header";
                entryHeader.innerHTML = statEntry.statValue;

                var entryText = document.createElement("span");
                entryText.className = "description-text";
                entryText.innerHTML = statEntry.statName;

                entryBlock.appendChild(entryChange);
                entryBlock.appendChild(entryHeader);
                entryBlock.appendChild(entryText);
                entryDiv.appendChild(entryBlock);
                myListDiv.appendChild(entryDiv);
            }
            container.appendChild(myListDiv);
        }


        if (box.isChangeList == true) {

            var list = document.createElement("ul");
            list.className = "nav nav-pills nav-stacked";            

            for (var i = 0; i < currentList.length; i++) {
                var currentEntry: userStatElements = currentList[i];

                var entry = document.createElement("li");

                var entryA = document.createElement("a");
                entryA.href = (currentEntry.hRef!= undefined) ? currentEntry.hRef : "#";
                entryA.innerHTML = currentEntry.statName;
                entry.appendChild(entryA);

                var entrySpan = document.createElement("span");
                entryA.appendChild(entrySpan);

                var textColor = (currentEntry.changeDirection == "up") ? "text-green" : (currentEntry.changeDirection == "down") ? "text-red" : (currentEntry.changeDirection == "no-change") ? "text-yellow" : "";
                entrySpan.className = "pull-right " + textColor;

                var entryI = document.createElement("i");
                entryI.className = (currentEntry.changeDirection == "up") ? "fa fa-angle-up" : (currentEntry.changeDirection == "down") ? "fa fa-angle-down" : (currentEntry.changeDirection == "no-change") ? "fa fa-angle-left" : "";
                entrySpan.appendChild(entryI);
                entrySpan.innerHTML = entrySpan.innerHTML + " " + currentEntry.statValue;

                container.appendChild(entry);         
            }         
        }

        if (box.isCommentList == true) {            

            for (var x = 0; x < currentList.length; x++) {

                var currentComment: userStatElements = currentList[x];

                var comBox = document.createElement("div")
                comBox.className = "box-comment";

                var comImg = document.createElement("img");
                comImg.className = "img-circle img-sm";
                comImg.alt = "user image";
                comImg.src = currentComment.commentImage;

                var comText = document.createElement("div");
                comText.className = "comment-text";

                var textName = document.createElement("span");
                textName.className = "username";
                textName.innerHTML = currentComment.statName;
                var textEntryDate = document.createElement("span");
                textEntryDate.className = "text-muted pull-right"
                textEntryDate.innerHTML = currentComment.commentInsertDate;
                textName.appendChild(textEntryDate);

                comText.appendChild(textName);
                comText.innerHTML = currentComment.statValue;

                //build Comment Entry
                comBox.appendChild(comImg);
                comBox.appendChild(comText);

                //add to comment list
                container.appendChild(comBox);
            }            
        }
        var myReturn = container.innerHTML;
        return myReturn;
    }
}
