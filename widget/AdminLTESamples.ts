export class AdminLTEActions {
               
        public static initializeWidgetPage() {
            infoBoxSamples("infoBoxes");
            statBoxSamples("statBoxes");                   
            standardBoxSamples("standardBoxes");
            directChatSamples("chatBoxes");
            userWidgetSamples("userWidgets");
            boxCommentSamples("boxComment");            
            dashboardV2Samples("other");
//          testGeneric("other");
        };                      
    }
        
    //INFO BOX -----------------------------------------------------------------    
    function infoBoxSamples(targetID: string) {
        var box2: AdminLTETools.infoBoxElements = {
            elementID: targetID,
            iconColor: "bg-green",
            count: "1,411",
            icon: "fa fa-flag-o",
            message: "Messages"
        }
        var box3: AdminLTETools.infoBoxElements = {
            elementID: targetID,
            iconColor: "bg-yellow",
            count: "1,412",
            icon: "fa fa-files-o",
            message: "Messages"
        }
        var box4: AdminLTETools.infoBoxElements = {
            elementID: targetID,
            iconColor: "bg-red",
            count: "1,413",
            icon: "fa fa-star-o",
            message: "Messages"
        }

        //simple box
        AdminLTETools.addInfoBox({
            elementID: targetID,
            iconColor: "bg-aqua",
            count: "1,410",
            icon: "fa fa-envelope-o",
            message: "Messages"
        });
        AdminLTETools.addInfoBox(box2);
        AdminLTETools.addInfoBox(box3);
        AdminLTETools.addInfoBox(box4);

        //has progrss bar
        AdminLTETools.addInfoBox({
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
        AdminLTETools.addInfoBox({
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
        AdminLTETools.addInfoBox({
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
        AdminLTETools.addInfoBox({
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
    
    //Stat BOX -----------------------------------------------------------------
    

    function statBoxSamples(targetID: string) {
        var box1: AdminLTETools.statBoxElements = {
            elementID: targetID,
            icon: "fa fa-shopping-cart",
            caption: "New Orders",
            count: "150",
            boxColor: "bg-aqua",
            //hRef: "http://www.google.com"
        }

        AdminLTETools.addStatBox(box1);
        AdminLTETools.addStatBox({
            elementID: targetID,
            icon: "ion ion-stats-bars",
            caption: "Bounce Rate",
            count: '53<sup style="font-size: 20px">%</sup>',
            boxColor: "bg-green",
            //hRef: "http://www.google.com"
        });
        AdminLTETools.addStatBox({
            elementID: targetID,
            icon: "ion ion-person-add",
            caption: "User Registrations",
            count: "44",
            boxColor: "bg-yellow",
            //hRef: "http://www.google.com"
        });
        AdminLTETools.addStatBox({
            elementID: targetID,
            icon: "ion ion-pie-graph",
            caption: "Unique Visitors",
            count: "65",
            boxColor: "bg-red",
            //hRef: "http://www.google.com"
        })
    }

    //Standard BOX -----------------------------------------------------------------
    
    function standardBoxSamples(targetID: string) {

        var myBody = AdminLTETools.bodyBuilder({ customBoxBody: "The Body of the Box" });

        //Simple Boxes
        AdminLTETools.genericBox({
            elementId: targetID,            
            headerContent: AdminLTETools.headerBuilder({
                title: "Expandable",
                tools: { hasCollapsible: { isCollapsed: false } }
            }),            
            bodyContent: myBody,
            boxType: "box box-default",           
            myBootstrap: "col-lg-3 col-md-3 col-sm-6 col-xs-12"
        })

        AdminLTETools.genericBox({
            elementId: targetID,            
            headerContent: AdminLTETools.headerBuilder({
                title: "Removable",
                tools: { hasRemovable: true }
            }),            
            bodyContent: AdminLTETools.bodyBuilder({ customBoxBody: "The Body of the Box" }),
            boxType: "box box-success",
            myBootstrap: "col-lg-3 col-md-3 col-sm-6 col-xs-12"
        })

        AdminLTETools.genericBox({
            elementId: targetID,            
            headerContent: AdminLTETools.headerBuilder({
                title: "Collapsible",
                tools: { hasCollapsible: { isCollapsed: true} }
            }),            
            bodyContent: AdminLTETools.bodyBuilder({ customBoxBody: "The Body of the Box" }),
            boxType: "box box-warning",
            myBootstrap: "col-lg-3 col-md-3 col-sm-6 col-xs-12",
            isCollapsed: true

        })

        AdminLTETools.genericBox({
            elementId: targetID,
            headerContent: AdminLTETools.headerBuilder({
                title: "Loading State"
            }),            
            bodyContent: AdminLTETools.bodyBuilder({ customBoxBody: "The Body of the Box" }),
            boxType: "box box-danger",
            myBootstrap: "col-lg-3 col-md-3 col-sm-6 col-xs-12"
        })


        //Solid
        AdminLTETools.genericBox({
            elementId: targetID,            
            headerContent: AdminLTETools.headerBuilder({
                title: "Expandable",
                tools: { hasCollapsible: {isCollapsed:false}}
            }),            
            bodyContent: AdminLTETools.bodyBuilder({ customBoxBody: "The Body of the Box" }),
            boxType: "box box-default",
            myBootstrap: "col-lg-3 col-md-3 col-sm-6 col-xs-12",
            isSolid: true
        })

        AdminLTETools.genericBox({
            elementId: targetID,            
            headerContent: AdminLTETools.headerBuilder({
                title: "Removable",
                tools: { hasRemovable: true }
            }),            
            bodyContent: AdminLTETools.bodyBuilder({ customBoxBody: "The Body of the Box" }),
            boxType: "box box-success",
            myBootstrap: "col-lg-3 col-md-3 col-sm-6 col-xs-12",
            isSolid: true
        })

        AdminLTETools.genericBox({
            elementId: targetID,            
            headerContent: AdminLTETools.headerBuilder({
                title: "Collapsible",
                tools: {hasCollapsible: { isCollapsed: true }}
            }),            
            bodyContent: AdminLTETools.bodyBuilder({ customBoxBody: "The Body of the Box" }),
            boxType: "box box-warning",
            myBootstrap: "col-lg-3 col-md-3 col-sm-6 col-xs-12",
            isSolid: true,
            isCollapsed:true
            
        })

        AdminLTETools.genericBox({
            elementId: targetID,            
            headerContent: AdminLTETools.headerBuilder({
                title: "Loading State",                
            }),            
            bodyContent: AdminLTETools.bodyBuilder({ customBoxBody: "The Body of the Box" }),
            boxType: "box box-danger",
            myBootstrap: "col-lg-3 col-md-3 col-sm-6 col-xs-12",
            isSolid:true
        })
        //        
    };    
    
    //Direct Chat -----------------------------------------------------------------
       
    function directChatSamples(targetID: string) {     
    
        var msg1: AdminLTETools.directChatMsg = {
            msgName: "Alexander Pierce",
            timeStamp: "23 Jan 2:00 pm",
            chatImg: "/Content/adminlte/img/avatar.png",
            chatText: "Is this template really for free? That's unbelievable!",
            chatOnRight: false
        };
        var msg2: AdminLTETools.directChatMsg = {
            msgName: "Sarah Bullock",
            timeStamp: "23 Jan 2:05 pm",
            chatImg: "/Content/adminlte/img/avatar2.png",
            chatText: "You better believe it!",
            chatOnRight: true
        };
        var contact1: AdminLTETools.directChatContact = {
            contactImage: "/Content/adminlte/img/avatar.png",
            contactName: "Count Dracula",
            contactDate: "2/28/2015",
            contactText: "How have you been? I was...",
            hRef: "#"
        };                
        var myMessages: AdminLTETools.directChatMsg[] = [msg1, msg2];
        var myContacts: AdminLTETools.directChatContact[] = [contact1];        
        var myHeader = AdminLTETools.headerBuilder({
            tools: {
                hasBadge: { badgeMessage: "3 New", badgeColor: "bg-light-blue" },
                hasRemovable: true,
                hasCollapsible: {isCollapsed:false},
                hasChatPane: true,},
            title: "Direct Chat"            
        });

        AdminLTETools.genericBox({
            boxType: "box box-primary direct-chat direct-chat-primary",
            elementId: targetID,
            myBootstrap: "col-lg-3 col-md-3 col-sm-6 col-xs-12",
            bodyContent: AdminLTETools.bodyBuilder({ directChatVals: { chatContacts: myContacts, chatMessages: myMessages } }),
            headerContent: myHeader,
            footerContent: AdminLTETools.footerBuilder({ chatAction: "#" }),
        });

        AdminLTETools.genericBox({
            boxType: "box box-success direct-chat direct-chat-success",
            elementId: targetID,
            myBootstrap: "col-lg-3 col-md-3 col-sm-6 col-xs-12",
            bodyContent: AdminLTETools.bodyBuilder({ directChatVals: { chatContacts: myContacts, chatMessages: myMessages } }),
            headerContent: myHeader,
            footerContent: AdminLTETools.footerBuilder({ chatAction: "#"}),
        });

        AdminLTETools.genericBox({
            boxType: "box box-warning direct-chat direct-chat-warning",
            elementId: targetID,
            myBootstrap: "col-lg-3 col-md-3 col-sm-6 col-xs-12",
            bodyContent: AdminLTETools.bodyBuilder({ directChatVals: { chatContacts: myContacts, chatMessages: myMessages } }),
            headerContent: myHeader,
            footerContent: AdminLTETools.footerBuilder({ chatAction: "#"}),
        });

        AdminLTETools.genericBox({
            boxType: "box box-danger direct-chat direct-chat-danger",
            elementId: targetID,
            myBootstrap: "col-lg-3 col-md-3 col-sm-6 col-xs-12",
            bodyContent: AdminLTETools.bodyBuilder({ directChatVals: { chatContacts: myContacts, chatMessages: myMessages } }),
            headerContent: myHeader,
            footerContent: AdminLTETools.footerBuilder({ chatAction: "#"}),            
        });                                
    };        

    // Social Widgets -------------------------------------------------------------
              
    function userWidgetSamples(targetID: string) {
        
        var userStats: AdminLTETools.userStatElements[] = [{
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
        var userStats2: AdminLTETools.userStatElements[] = [{
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
        var myHeader1: AdminLTETools.userHeaderElement = {
            userName: "Nadia Carmichael",
            userDesc: "Lead Developer",
            userImage: "/Content/adminlte/img/avatar04.png"
        };
        var myHeader2: AdminLTETools.userHeaderElement = {
            userName: "Alexander Pierce",
            userDesc: "Founder & CEO",
            userImage: "/Content/adminlte/img/avatar.png"            
        };
        var myHeader3: AdminLTETools.userHeaderElement = {
            userName: "Elizabeth Pierce",
            userDesc: "Web Designer",
            userImage: "/Content/adminlte/img/avatar.png"
        };       
        
        AdminLTETools.genericBox({            
            bgColor: "bg-yellow",
            headerContent: AdminLTETools.headerBuilder({ userHeaderValues: myHeader1}),
            elementId: targetID,            
            footerContent: AdminLTETools.footerBuilder({ customBoxFooter: AdminLTETools.buildStatList({ isStacked: true, listValues: userStats })}),
            isWidget: true,
            myBootstrap: "col-lg-4 col-md-4 col-sm-6 col-xs-12",
            boxType: "box box-widget widget-user-2" ///<-notice difference in name->
        });

        AdminLTETools.genericBox({            
            bgColor: "bg-aqua-active",
            headerContent: AdminLTETools.headerBuilder({ userHeaderValues: myHeader2 }),
            elementId: targetID,
            footerContent: AdminLTETools.footerBuilder({ customBoxFooter: AdminLTETools.buildStatList({ isBlockStack: true, listValues: userStats2 }) }),
            isWidget: true,
            myBootstrap: "col-lg-4 col-md-4 col-sm-6 col-xs-12",
            boxType: "box box-widget widget-user"
        });

        AdminLTETools.genericBox({            
            bgImage: "/Content/adminlte/img/photo1.jpg",
            bgColor: "bg-aqua-active",
            headerContent: AdminLTETools.headerBuilder({ userHeaderValues: myHeader3 }),
            elementId: targetID,            
            footerContent: AdminLTETools.footerBuilder({ customBoxFooter: AdminLTETools.buildStatList({ isBlockStack: true, listValues: userStats2 }) }),
            isWidget: true,
            myBootstrap: "col-lg-4 col-md-4 col-sm-6 col-xs-12",
            boxType: "box box-widget widget-user"
        }); 
    };
                    
    //Comment Box -----------------------------------------------------------------
    
    function boxCommentSamples(targetID:string) {
                    
        var comment1: AdminLTETools.userStatElements = {
            commentImage: "/Content/adminlte/img/avatar3.png",
            statName: "Maria Gonzales",
            commentInsertDate: "8:03 PM Today",
            statValue: "It is a long established fact that a reader will be distracted " +
            "by the readable content of a page when looking at its layout."
        }

        var comment2: AdminLTETools.userStatElements = {
            commentImage: "/Content/adminlte/img/avatar.png",
            statName: "Nora Havisham",
            commentInsertDate: "8:03 PM Today",
            statValue: " The point of using Lorem Ipsum is that it has a more-or-less normal distribution of " +
            "letters, as opposed to using 'Content here, content here', making it look like readable English."
        }                    

        var myAttachment: AdminLTETools.attachmentElements = {
            attachImg: "/Content/adminlte/img/photo1.jpg",
            attachHeadHref: "http://www.lipsum.com/",
            attachHeadText: "Lorem ipsum text generator",
            attachBodytext: "Description about the attachment can be placed here.Lorem Ipsum is " +
            "simply dummy text of the printing and typesetting industry...",
            attachBodyHref: "#"
        }; 

        var myCommentPost1: AdminLTETools.commentPostElements = {
            commentMsg: "<p>I took this photo this morning. What do you guys think?</p>",
            commentStats: "45 likes - 2 comments",
            commentImg: "/Content/adminlte/img/photo1.jpg"
        };        

        var myCommentPost2: AdminLTETools.commentPostElements = {
            commentMsg: "<p>Far far away, behind the word mountains, far from the countries Vokalia and " +
            "Consonantia, there live the blindtexts.Separated they live in Bookmarksgrove right at</p>" +
            "<p>the coast of the Semantics, a large language ocean.A small river named Duden flows by " +
            "their place and supplies it with the necessary regelialia.It is a paradisematic country, " +
            "in which roasted parts of sentences fly into your mouth.</p>",
            commentStats: "45 likes - 2 comments",
            attachmentVals: myAttachment
        };        

        var userComments: AdminLTETools.userStatElements[] = [comment1, comment2];
        var comList = AdminLTETools.buildStatList({isCommentList: true,listValues: userComments});        
        var myHeader = AdminLTETools.headerBuilder({
            commentHeaderValues: {
                userName: "Jonathan Burke Jr.",
                userDesc: "Shared Publicly - 7:30PM Today",
                userImage: "/Content/adminlte/img/avatar5.png",
            },            
            tools: { hasCollapsible: {isCollapsed:false}, hasRemovable:true, hasMarkRead:true}

        });        
        var myFooter = AdminLTETools.footerBuilder({ commentVals: { commentList: comList, commentPostImg: "/Content/adminlte/img/avatar5.png"}});
        
        AdminLTETools.genericBox({
            elementId: targetID,
            headerContent: myHeader,
            bodyContent: AdminLTETools.bodyBuilder({ commentVals: myCommentPost1 }),
            footerContent: myFooter,
            myBootstrap: "col-lg-6 col-md-6 col-sm-6 col-xs-12"
        });

        AdminLTETools.genericBox({
            elementId: targetID,
            headerContent: myHeader,
            bodyContent: AdminLTETools.bodyBuilder({ commentVals: myCommentPost2}),
            footerContent: myFooter,
            myBootstrap: "col-lg-6 col-md-6 col-sm-6 col-xs-12"            
        });
    }       

    //Monthly Recap Report-----------------------------------------------------------------
        
    function dashboardV2Samples(targetID:string) {

        var dList = '<li><a href="#">Action</a></li>' +
            '<li><a href="#">Another action</a></li >' +
            '<li><a href="#">Something else here</a></li>' +
            '<li class="divider"></li>' +
            '<li><a href="#">Separated link</a></li>';

        var myFooterList: AdminLTETools.userStatElements[] = [
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
                statName: "Goal Completions",
                statValue: "1200",
                changeDirection: "down",
                changePrcnt: "18%"
            }];

        var legndVals: progressElements[] = [
            { Label: 'Add Products to Cart', givenVal: 160, maxVal: 200, color: 'aqua' },
            { Label: 'Complete Purchase', givenVal: 310, maxVal: 400, color: 'red' },
            { Label: 'Visit Premium Page', givenVal: 480, maxVal: 800, color: 'green' },
            { Label: 'Send Inquiries', givenVal: 250, maxVal: 500, color: 'yellow' },
        ];

        var legendVals: legendElements = { legendTitle: 'Goal Completion', legendValues: legndVals };
        var chartVals: chartElements = { chartId: 'salesChart', chartTitle: 'Sales: 1 Jan, 2014 - 30 Jul, 2014' };

        
        AdminLTETools.genericBox({
            elementId: targetID,
            headerContent: AdminLTETools.headerBuilder({
                title: "Monthly Recap Report",
                tools: { hasCollapsible: { isCollapsed: false }, hasRemovable: true, hasDropdown: {dropDownList:dList}}
            }),
            bodyContent: AdminLTETools.bodyBuilder({ customBoxBody: buildChartwithLegend(chartVals, legendVals) }),
            footerContent: AdminLTETools.footerBuilder({ customBoxFooter: AdminLTETools.buildStatList({ isBlockWChange: true, listValues: myFooterList }) }),
            myBootstrap: "col-md-12",
            boxType:"box"
        })

    }
