module AdminLTETools {
    
    export function addInfoBox(box: infoBoxElements) {

        var outerDiv = document.createElement("div");
        outerDiv.className = (box.myBootstrap == undefined) ? "col-md-3 col-sm-6 col-xs-12" : box.myBootstrap;

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

    export function addStatBox(box: AdminLTETools.statBoxElements) {
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
        a.href = (box.hRef != undefined) ? box.hRef : "#";
        a.className = "small-box-footer";
        a.innerHTML = 'More Info <i class="fa fa-arrow-circle-right"></i>';

        outerDiv.appendChild(boxDiv);
        boxDiv.appendChild(innerDiv);
        boxDiv.appendChild(iconDiv);
        boxDiv.appendChild(a);
        iconDiv.appendChild(iOne);

        document.getElementById(box.elementID).appendChild(outerDiv);
    };    

    export function buildStatList(box: statListElements) {

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
                entryA.href = (currentEntry.hRef != undefined) ? currentEntry.hRef : "#";
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

   export function footerBuilder(box: footerElements) {
        var boxFooter = document.createElement("div");

        if (box.chatAction != undefined) {

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
            a.href = (box.linkHref != undefined) ? box.linkHref : "#";
            a.className = "small-box-footer pull-right";
            a.innerHTML = 'More Info ';
            boxFooter.appendChild(a);

            var i = document.createElement("i");
            i.className = "fa fa-arrow-circle-right"
            a.appendChild(i);
        }

        boxFooter.innerHTML = (box.customBoxFooter == undefined) ? boxFooter.innerHTML : boxFooter.innerHTML + box.customBoxFooter;

        return boxFooter.innerHTML;
    };

    export function bodyBuilder(box: bodyElements) {

        var boxBody = document.createElement("div");

        if (box.directChatVals != undefined) {

            if (box.directChatVals.chatMessages != undefined) {

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

        boxBody.innerHTML = (box.customBoxBody == undefined) ? boxBody.innerHTML : boxBody.innerHTML + box.customBoxBody;
        return boxBody.innerHTML;
    };


   export function headerBuilder(box: headerElements) {

        var boxHeader = document.createElement("div");

        if (box.title != undefined) {

            boxHeader.innerHTML = '<h3 class="box-title">' + box.title + '</h3>';
        }

        if (box.tools != undefined) {

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

                var button2 = document.createElement("button");
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

            if (box.tools.hasCollapsible != undefined) {

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
    };

    export function genericBox(genBox: genericBoxElements) {

        var container = document.createElement("div");
        container.className = (genBox.myBootstrap == undefined) ? "col-lg-4 col-md-4 col-sm-6 col-xs-12" : genBox.myBootstrap;

        var box = document.createElement("div");
        box.className = (genBox.boxType == undefined) ? "box box-default" : genBox.boxType;


        if (genBox.isWidget == true) {
            box.className = (genBox.boxType == undefined) ? "box box-widget widget-user" : genBox.boxType;
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
                header.className = (genBox.bgColor == undefined) ? "widget-user-header bg-black" : "widget-user-header " + genBox.bgColor;
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
    };

    export function buildChart(chartVals: chartElements) {
        var container = document.createElement("div");

        var chartTitle = document.createElement("p");
        chartTitle.className = "text-center";
        chartTitle.innerHTML = '<strong>' + chartVals.chartTitle + '</strong>';

        var chart = document.createElement("div");
        chart.className = "chart";
        var chartCanvas = document.createElement("canvas");
        chartCanvas.id = chartVals.chartId;
        chartCanvas.style.height = '180px';
        chart.appendChild(chartCanvas);


        container.appendChild(chartTitle);
        container.appendChild(chart);
        return container.innerHTML;
    }

   export function buildLegend(legend: legendElements) {
        var entries = legend.legendValues;
        var container = document.createElement("div");

        var legendTitle = document.createElement("div");
        legendTitle.innerHTML = '<p class="text-center"><strong>' + legend.legendTitle + '</strong></p>';

        for (var x in entries) {
            legendTitle.innerHTML += progGroup(entries[x]);
        }

        container.appendChild(legendTitle);

        return container.innerHTML;
    }

   export function buildChartwithLegend(chartVals: chartElements, legendVals: legendElements) {
       var container = document.createElement("div");
       var r = document.createElement("div");
       r.className = "row";

       var chart = document.createElement("div");
       chart.className = "col-md-8";
       chart.innerHTML = AdminLTETools.buildChart(chartVals);

       var legend = document.createElement("div");
       legend.className = "col-md-4";
       legend.innerHTML = AdminLTETools.buildLegend(legendVals);

       r.appendChild(chart);
       r.appendChild(legend);

       container.appendChild(r);

       return container.innerHTML;
   }
    
   export function progGroup(entry: progressElements) {
       var container = document.createElement("div");

       var pGrp = document.createElement("div");
       pGrp.className = "progress-group";

       var progText = document.createElement("span");
       progText.className = "progress-text";
       progText.innerText = entry.Label;

       var progNumber = document.createElement("span");
       progNumber.className = "progress-number";
       progNumber.innerHTML = '<b>' + entry.givenVal + '</b> /' + entry.maxVal;

       var progress = document.createElement("div");
       progress.className = "progress sm";

       var progBar = document.createElement("div");
       progBar.className = "progress-bar progress-bar-" + entry.color;
       var prct = Math.round((entry.givenVal / entry.maxVal) * 100);
       progBar.style.width = prct + '%';
       progress.appendChild(progBar);

       pGrp.appendChild(progText);
       pGrp.appendChild(progNumber);
       pGrp.appendChild(progress);

       container.appendChild(pGrp);

       return container.innerHTML;
   };    

}
