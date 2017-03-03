
namespace myProject{
    
    export class AdminLTEActions {

        constructor() {
            
        }

        static initializeWidgetPage() {
            infoBoxSamples();
            statBoxSamples();                   
            standardBoxSamples();
        };
              
        
    }

   //Info BOX -----------------------------------------------------------------
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
        progressDescription?:string
    }

    function infoBoxSamples() {
        var box2: infoBoxElements = {
            elementID: "buildME",
            iconColor: "bg-green",
            count: "1,411",
            icon: "fa fa-flag-o",
            message: "Messages"
        }
        var box3: infoBoxElements = {
            elementID: "buildME",
            iconColor: "bg-yellow",
            count: "1,412",
            icon: "fa fa-files-o",
            message: "Messages"
        }
        var box4: infoBoxElements = {
            elementID: "buildME",
            iconColor: "bg-red",
            count: "1,413",
            icon: "fa fa-star-o",
            message: "Messages"
        }

        //simple box
        addInfoBox({
            elementID: "buildME",
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
            elementID: "buildME",
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
            elementID: "buildME",
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
            elementID: "buildME",
            iconColor: "bg-yellow",
            boxColor: "bg-yellow",
            count: "41,410",
            message: "Events",
            icon: "fa fa-calendar",
            progressbar: true,
            progressWidth: "70%",
            progressDescription: "70% increase in 30 Days"
        });
        addInfoBox2({
            elementID: "buildME",
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
    function addInfoBox(box: infoBoxElements) {
        
        var outerDiv = document.createElement("div");
        outerDiv.className = "col-md-3 col-sm-6 col-xs-12";

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
    //string literal
    function addInfoBox2(box: infoBoxElements) {
        //Text Literal approach//
        var iconColor = (box.iconColor != undefined) ? box.iconColor : "";
        var boxColor = (box.boxColor != undefined) ? box.boxColor : "";

        var myDiv = document.createElement("div");
        myDiv.className = "col-md-3 col-sm-6 col-xs-12";
        var divBox = '<div class="info-box '+boxColor+'">';
        var iconDiv = '<span class="info-box-icon ' + iconColor + '">';
        var i = '<i class="' + box.icon + '" > </i></span> ';
        var infoboxContent = '<div class="info-box-content">';
        var infoBoxText = '<span class="info-box-text"> '+box.message+'</span>';
        var infoBoxCount = '<span class="info-box-number">'+box.count +'</span>';
        var progressDiv = '<div class="progress">';
        var progressBar = '<div class="progress-bar" style= "width:' + box.progressWidth + '" > </div>';
        var progressDivClose = '</div>';
        var progressDesc = '<span class="progress-description" >' + box.progressDescription + '</span>';
        var closeInfoBox = '</div>';
        var closeDivBox = '</div>';

        var core = divBox + iconDiv + i + infoboxContent + infoBoxText + infoBoxCount;
        var progress = progressDiv + progressBar +progressDivClose+ progressDesc;        
        var closeCore = closeInfoBox + closeDivBox;             

        var x = (box.progressbar == undefined) ? core + closeCore : (box.progressbar == false) ? core + closeCore : core + progress + closeCore ;
        myDiv.innerHTML = x;

        document.getElementById(box.elementID).appendChild(myDiv);        
    }
    //Stat BOX -----------------------------------------------------------------
    export interface statBoxElements {
        elementID: string,
        icon: string,
        caption: string,
        count: string,
        hRef?: string,
        boxColor?: string       
    }

    function statBoxSamples() {
        var box1: statBoxElements = {
            elementID: "buildME",
            icon: "fa fa-shopping-cart",
            caption: "New Orders",
            count: "150",
            boxColor: "bg-aqua",
            //hRef: "http://www.google.com"
        }

        addStatBox(box1);
        addStatBox({
            elementID: "buildME",
            icon: "ion ion-stats-bars",
            caption: "Bounce Rate",
            count: '53<sup style="font-size: 20px">%</sup>',
            boxColor: "bg-green",
            //hRef: "http://www.google.com"
        });
        addStatBox({
            elementID: "buildME",
            icon: "ion ion-person-add",
            caption: "User Registrations",
            count: "44",
            boxColor: "bg-yellow",
            //hRef: "http://www.google.com"
        });
        addStatBox2({
            elementID: "buildME",
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
        outerDiv.className = "col-lg-3 col-xs-6";

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

    //string literal
    function addStatBox2(box: statBoxElements) {        

        var boxColor = (box.boxColor != undefined) ? box.boxColor : "";
        var hRef = (box.hRef != undefined) ? box.hRef : "#";

        var myDiv = document.createElement("div");
        myDiv.className = "col-lg-3 col-xs-6";

        var boxDiv = '<div class="small-box ' + boxColor + '">';
        var innerDiv = '<div class="inner">' + '<h3>' + box.count + '</h3><p>' + box.caption + '</p></div>';
        var iconDiv = '<div class="icon"><i class="' + box.icon + '"></i></div>';
        var aDiv = '<a href="' + hRef + '" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>';
        var closeBox = '</div>';
                
        var x = boxDiv + innerDiv + iconDiv + aDiv + closeBox;
        myDiv.innerHTML = x;

        document.getElementById(box.elementID).appendChild(myDiv);
    }

    //Standard BOX -----------------------------------------------------------------
    export interface standardBoxElements {
        elementID: string,        
        boxBody: string,
        title: string,
        boxType: "box-default" | "box-success" | "box-warning" | "box-danger",
        hasTool?: boolean,
        toolIcon?: string,
        isLoading?: boolean,
        collapsible?: boolean,
        isRemove?: boolean,
        isCollapsed?: boolean
        isSolid?: boolean
    }

    function standardBoxSamples() {
        var box1: standardBoxElements = {
            elementID: "buildME",              
            boxBody: "The body of the box",
            title: "Expandable",
            boxType: "box-default", // "box-default",
            hasTool: true,
            toolIcon: "fa fa-plus",
            isLoading: false,
            collapsible: true,
            isCollapsed: false,
            isRemove: false,
            isSolid: true
        }

        addStandardBox({
            elementID: "buildME",
            boxBody: "The body of the box",
            title: "Expandable",
            boxType: "box-default", // "box-default",
            hasTool: true,
            toolIcon: "fa fa-plus",
            isLoading: false,
            collapsible: true,
            isCollapsed: false,
            isRemove: false,
            isSolid: false
        });
        addStandardBox({
            elementID: "buildME",
            boxBody: "The body of the box",
            title: "Removable",
            boxType: "box-success", // "box-default",
            hasTool: true,
            toolIcon: "fa fa-times",
            isRemove: true
        });
        addStandardBox({
            elementID: "buildME",
            boxBody: "The body of the box",
            title: "Collapsible",
            boxType: "box-warning", // "box-default",
            hasTool: true,
            toolIcon: "fa fa-minus",
            collapsible: true,
            isCollapsed: true
        });
        addStandardBox({
            elementID: "buildME",
            boxBody: "The body of the box",
            title: "Loading State",
            boxType: "box-danger", // "box-default",
            isLoading: true            
        });


        addStandardBox(box1);
        addStandardBox({
            elementID: "buildME",            
            boxBody: "The body of the box",
            title: "Removable",
            boxType: "box-success", // "box-default",
            hasTool: true,
            toolIcon: "fa fa-times",
            isRemove: true,
            isSolid: true
        });
        addStandardBox({
            elementID: "buildME",
            boxBody: "The body of the box",
            title: "Collapsible",
            boxType: "box-warning", // "box-default",
            hasTool: true,
            toolIcon: "fa fa-minus",
            collapsible: true,
            isCollapsed: true, 
            isSolid: true
        });
        addStandardBox({
            elementID: "buildME",
            boxBody: "The body of the box",
            title: "Loading State",
            boxType: "box-danger", // "box-default",
            isLoading: true,
            isSolid: true
        });

    };


    function addStandardBox(box: standardBoxElements) {

        var collapsed = (box.collapsible == true) ? (box.isCollapsed == true) ? "collapsed-box" : "" : "";
        var boxSolid = (box.isSolid == true) ? "box-solid" : "";
        var toolWidget = (box.collapsible == true) ? "collapse" : (box.isRemove == true) ? "remove" : "";        
        
        var outerDiv = document.createElement("div");
        outerDiv.className = "col-lg-3 col-xs-6";

        var boxDiv = document.createElement("div");
        boxDiv.className = "box "+box.boxType+" "+collapsed + " " + boxSolid ;

        var boxHeader = document.createElement("div");
        boxHeader.className = "box-header with-border";
        boxHeader.innerHTML = ' <h3 class="box-title">'+box.title+'</h3>';
            
        var bodyDiv = document.createElement("div");
        bodyDiv.className = "box-body";
        bodyDiv.innerHTML = box.boxBody;

        outerDiv.appendChild(boxDiv);
        boxDiv.appendChild(boxHeader);        
        boxDiv.appendChild(bodyDiv);

        if (box.hasTool == true) {
            var boxTools = document.createElement("div");
            boxTools.className = "box-tools pull-right";

            var button = document.createElement("button");
            button.className = "btn btn-box-tool";
            button.setAttribute("data-widget", toolWidget);

            var toolIcon = document.createElement("i");
            toolIcon.className = box.toolIcon;

            boxHeader.appendChild(boxTools);
            boxTools.appendChild(button);
            button.appendChild(toolIcon);
        };
        if (box.isLoading == true) {
            var overlayDiv = document.createElement("div");
            overlayDiv.className = "overlay";
            var overlayIcon = document.createElement("i");
            overlayIcon.className = "fa fa-refresh fa-spin"

            boxDiv.appendChild(overlayDiv);
            overlayDiv.appendChild(overlayIcon);
        };

        document.getElementById(box.elementID).appendChild(outerDiv);

    }


 //Direct Chat -----------------------------------------------------------------
    export interface directChatElements {
        elementID: string,
        boxType: "box-primary" | "box-success" | "box-warning" | "box-danger",
        directChatType: "direct-chat-primary" | "direct-chat-success" | "direct-chat-warning" | "direct-chat-danger",
        chatTitle: string,
        numNewMessages: string,
        badgeColor: string,
    };

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

    function directChatSamples() {
      
        var directChat1: directChatElements = {
            elementID: "buildME",
            boxType: "box-primary",
            directChatType: "direct-chat-primary",
            chatTitle: "Direct Chat",
            numNewMessages: "3",
            badgeColor: "bg-light-blue"
        };
        var directChat2: directChatElements = {
            elementID: "buildME",
            boxType: "box-success",
            directChatType: "direct-chat-success",
            chatTitle: "Direct Chat",
            numNewMessages: "3",
            badgeColor: "bg-light-blue"
        };
        var directChat3: directChatElements = {
            elementID: "buildME",
            boxType: "box-warning",
            directChatType: "direct-chat-warning",
            chatTitle: "Direct Chat",
            numNewMessages: "3",
            badgeColor: "bg-light-blue"
        };
        var directChat4: directChatElements = {
            elementID: "buildME",
            boxType: "box-danger",
            directChatType: "direct-chat-danger",
            chatTitle: "Direct Chat",
            numNewMessages: "3",
            badgeColor: "bg-light-blue"
        };

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

        addDirectChat(directChat1, myMessages, myContacts);
        addDirectChat(directChat2, myMessages, myContacts);
        addDirectChat(directChat3, myMessages, myContacts);
        addDirectChat(directChat4, myMessages, myContacts);

    };

    function addDirectChat(box: directChatElements, chatMsgs: directChatMsg[], contList: directChatContact[]) {

        var outerDiv = document.createElement("div");
        outerDiv.className = "col-md-3 col-sm-6 col-xs-12";

        //direct chat primary
        var boxDiv = document.createElement("div");
        boxDiv.className = "box " + box.boxType + " direct-chat " + box.directChatType;

        //header
        var headerDiv = document.createElement("div");
        headerDiv.className = "box-header with-border";
        headerDiv.innerHTML = '<h3 class="box-title">' + box.chatTitle + '</h3>';

        var boxTools = document.createElement("div");
        boxTools.className = "box-tools pull-right";

        var toolSpan = document.createElement("span");
        toolSpan.setAttribute("data-toggle", "tooltip");
        toolSpan.title = box.numNewMessages + " New Messages";
        toolSpan.className = "badge " + box.badgeColor;
        toolSpan.innerHTML = box.numNewMessages;

        var toolCollapse = document.createElement("button");
        toolCollapse.className = "btn btn-box-tool";
        toolCollapse.setAttribute("data-widget", "collapse");
        toolCollapse.innerHTML = '<i class="fa fa-minus"></i>';

        var toolTooltip = document.createElement("button");
        toolTooltip.className = "btn btn-box-tool";
        toolTooltip.setAttribute("data-widget", "chat-pane-toggle");
        toolTooltip.innerHTML = '<i class="fa fa-comments"></i>';
        toolTooltip.title = "Contacts";
        toolTooltip.setAttribute("data-toggle","tooltip")

        var toolRemove = document.createElement("button");
        toolRemove.className = "btn btn-box-tool";
        toolRemove.setAttribute("data-widget", "remove");
        toolRemove.innerHTML = '<i class="fa fa-times"></i>';

        //Build Header 
        headerDiv.appendChild(boxTools);
        boxTools.appendChild(toolSpan);
        boxTools.appendChild(toolCollapse);
        boxTools.appendChild(toolTooltip);
        boxTools.appendChild(toolRemove);

        //Body
        var bodyDiv = document.createElement("div");
        bodyDiv.className = "box-body";

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
        //---------------------------------------------------

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
            a.href = (contact.hRef!= undefined)?contact.hRef:"#";

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
               

        //build body
        bodyDiv.appendChild(directChatMessages);
        bodyDiv.appendChild(directChatContacts);
        

        //Footer
        var footerDiv = document.createElement("div");
        footerDiv.className = "box-footer";

        var formDiv = document.createElement("form");
        formDiv.action = "#";
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
        inputButton.type = "button";
        inputButton.className = "btn btn-primary btn-flat";
        inputButton.innerHTML = "Send";

        //Build Footer
        inputSpan.appendChild(inputButton);
        inputDiv.appendChild(inputArea);
        inputDiv.appendChild(inputSpan);
        formDiv.appendChild(inputDiv);
        footerDiv.appendChild(formDiv);        

        //Build Final
        outerDiv.appendChild(boxDiv);
        boxDiv.appendChild(headerDiv);
        boxDiv.appendChild(bodyDiv);
        boxDiv.appendChild(footerDiv);        

        document.getElementById(box.elementID).appendChild(outerDiv);
    };

    // Social Widgets -------------------------------------------------------------

    export interface userWidgetElements {
        elementID: string,
        bgColor: string, 
        userName: string,
        userDesc?: string,
        userImage?: string,
        projHref?: string ,  
        taskHref?: string, 
        compProjHref?: string, 
        followHref?: string,
        bgImage?:string,
    }

    export interface userStatElements {
        statName: string, 
        statValue: string, 
        statColor?: string
        hRef?: string, 
    }

    function userWidgetSamples() {
        var user1: userWidgetElements = {
            elementID: "buildME",
            bgColor: "bg-yellow",
            userImage: "/Content/adminlte/img/avatar04.png",
            userName: "Nadia Carmichael",         
            userDesc: "Lead Developer",
            bgImage: "/Content/adminlte/img/photo1.jpg",
        }

        var user2: userWidgetElements = {
            elementID: "buildME",
            bgColor: "bg-aqua-active",
            userImage: "/Content/adminlte/img/avatar.png",
            userName: "Alexander Pierce",
            userDesc: "Founder & CEO",         
        }

        var user3: userWidgetElements = {
            elementID: "buildME",
            bgColor: "bg-black",
            userImage: "/Content/adminlte/img/avatar.png",
            userName: "Elizabeth Pierce",
            userDesc: "Web Designer",
            bgImage: "/Content/adminlte/img/photo1.jpg",
        }
        var projects: userStatElements = {
            statName: "Projects",
            statValue: "31",
            statColor: "bg-blue",
            hRef: "#"
        }

        var tasks: userStatElements = {
            statName: "Tasks",
            statValue: "5",
            statColor: "bg-aqua",
            hRef: "#"
        }

        var completedProjects: userStatElements = {
            statName: "Completed Projects",
            statValue: "12",
            statColor: "bg-green",
            hRef: "#"
        }

        var followers: userStatElements = {
            statName: "Followers",
            statValue: "842",
            statColor: "bg-red",
            hRef: "https://www.google.com"
        }

        var sales: userStatElements = {
            statName: "SALES",
            statValue: "3,200"            
        }

        var products: userStatElements = {
            statName: "Products",
            statValue: "35"            
        }

        var userStats: userStatElements[] = [projects, tasks, completedProjects, followers];
        var userStats2: userStatElements[] = [sales, followers, products];

        addUserWidget1(user1, userStats);
        addUserWidget2(user2, userStats2);
        addUserWidget2(user3, userStats2);

    };

    function addUserWidget1(box: userWidgetElements, stats: userStatElements[]) {
        var outerDiv = document.createElement("div");
        outerDiv.className = "col-md-4 col-sm-6 col-xs-12";

        var boxDiv= document.createElement("div");
        boxDiv.className = "box box-widget widget-user-2";

        var boxHeader = document.createElement("div");
        boxHeader.className = "widget-user-header " + box.bgColor;

        var userImage= document.createElement("div");
        userImage.className = "widget-user-image";

        var Image = document.createElement("img");
        Image.className = "img-circle";
        Image.alt = "User Avatar";
        Image.src = box.userImage;
        userImage.appendChild(Image);

        var userName = document.createElement("h3");
        userName.className = "widget-user-username";
        userName.innerHTML = (box.userName != undefined)? box.userName:"";

        var userDescription = document.createElement("h5");
        userDescription.className = "widget-user-desc";
        userDescription.innerHTML = (box.userDesc != undefined) ? box.userDesc : "";

        //build header
        boxHeader.appendChild(userImage);
        boxHeader.appendChild(userName);
        boxHeader.appendChild(userDescription);        

        var boxFooter = document.createElement("div");
        boxFooter.className = "box-footer no-padding";

        var footerList = document.createElement("ul");
        footerList.className = "nav nav-stacked";
        
        for (var i = 0; i < stats.length; i++) {

            var statEntry:userStatElements = stats[i];

            var entry = document.createElement("li");

            var entryA = document.createElement("a");
            entryA.href = (statEntry.hRef != undefined) ? statEntry.hRef : "#";
            entryA.innerHTML = statEntry.statName;

            var entrySpan = document.createElement("span");
            entrySpan.className = (statEntry.statColor != undefined) ? "pull-right badge " + statEntry.statColor : "pull-right badge";
            entrySpan.innerHTML = statEntry.statValue;

            entryA.appendChild(entrySpan);
            entry.appendChild(entryA);            
            footerList.appendChild(entry);
        }                

        //build footer
        boxFooter.appendChild(footerList);

        //final Build
        outerDiv.appendChild(boxDiv);
        boxDiv.appendChild(boxHeader);
        boxDiv.appendChild(boxFooter);       

        document.getElementById(box.elementID).appendChild(outerDiv);
    }

    function addUserWidget2(box: userWidgetElements, stats: userStatElements[]) {
                       
        var outerDiv = document.createElement("div");
        outerDiv.className = "col-md-4 col-sm-6 col-xs-12";

        var boxDiv = document.createElement("div");
        boxDiv.className = "box box-widget widget-user";

        //header
        var boxHeader = document.createElement("div");
        boxHeader.className = "widget-user-header " + box.bgColor;

        if (box.bgImage != undefined) {

            boxHeader.style.background = "url('" + box.bgImage + "') center center";
        }
        
        var userName = document.createElement("h3");
        userName.className = "widget-user-username";
        userName.innerHTML = (box.userName != undefined) ? box.userName : "";

        var userDescription = document.createElement("h5");
        userDescription.className = "widget-user-desc";
        userDescription.innerHTML = (box.userDesc != undefined) ? box.userDesc : "";

        //build header
        boxHeader.appendChild(userName);
        boxHeader.appendChild(userDescription);

        //user Image
        var userImage = document.createElement("div");
        userImage.className = "widget-user-image";

        var Image = document.createElement("img");
        Image.className = "img-circle";
        Image.alt = "User Avatar";
        Image.src = box.userImage;

        //build user image
        userImage.appendChild(Image);

        //Footer
        var boxFooter = document.createElement("div");
        boxFooter.className = "box-footer";

        var footerList = document.createElement("div");
        footerList.className = "row";

        for (var i = 0; i < stats.length; i++) {

            var statEntry: userStatElements = stats[i];

            var entry = document.createElement("div");
            entry.className = "col-sm-4 border-right";

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
            entry.appendChild(entryBlock);
            footerList.appendChild(entry);
        }

        //build footer
        boxFooter.appendChild(footerList);

        //final Build
        outerDiv.appendChild(boxDiv);
        boxDiv.appendChild(boxHeader);
        boxDiv.appendChild(userImage);
        boxDiv.appendChild(boxFooter);

        document.getElementById(box.elementID).appendChild(outerDiv);
    }    
}
