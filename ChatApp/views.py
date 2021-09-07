from django.shortcuts import render, HttpResponse, redirect
from ChatApp.models import ChatRoom, Message
from django.contrib.auth.models import User
from django.db.models import Q
from datetime import datetime
from datetime import time
from django.utils import timezone
# Create your views here.


def home_page(request):
    all_users = User.objects.exclude(username=request.user)
    # all_users = User.objects.all()
    ct_room = ChatRoom.objects.filter(sellers=request.user)
    for_buyer = ChatRoom.objects.filter(buyer=request.user)
    # print(ct_room)
    args = {
        'all_users': all_users,
        'ct_room': ct_room,
        'for_buyer': for_buyer
    }
    return render(request, 'Test/index.html', args)



def user_details(request, id):
    user_details = User.objects.get(pk=id)
    
    args = {
        'user_details': user_details
    }
    if request.method == 'POST':
        buyer = request.user
        sellers = user_details.username
        
        sellers = User.objects.get(username=sellers)
        
        room_name = request.POST.get('room_name')
        
        room = ChatRoom(
            buyer=buyer, sellers=sellers, room_name=room_name
        )
        room.save()
        
        return redirect(f"/chat/chatroom/{room.id}")
        
    return render(request, 'Test/user_details.html', args)



def chatRoomView(request, id):
    chatroom = ChatRoom.objects.get(pk=id)
    values = Message.objects.filter(chatroom=id)
    rooms = ChatRoom.objects.filter(Q(buyer=request.user) or Q(sellers=request.user))
    # print(values.sent_date)
    current_time = datetime.now(timezone.utc)
    print("Current Time: " + str(current_time))

    last = chatroom.buyer.last_login

    ago = str(current_time - last).split(",")[0]

    print(ago + "AGOOOOOOOO")

    if request.method == 'POST':
        sender = request.user
        msg = request.POST.get('msg')
        sent = Message(sender=sender, msg=msg, chatroom=chatroom)

        chatroom.recent_chat = True
        chatroom.save()
        sent.save()

        return redirect(f"/chat/chatroom/{chatroom.id}")
    
    args = {
        'chatroom': chatroom,
        'values': values,
        'rooms': rooms,
        'ago': ago
    }
    
    print(chatroom)
    return render(request, "Test/chatRoom.html", args)