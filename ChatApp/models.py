from django.db import models
from django.contrib.auth.models import User
from datetime import datetime
# Create your models here.


class ChatRoom(models.Model):
    room_name = models.CharField(max_length=210, null=True)
    buyer = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    sellers = models.ForeignKey(User, on_delete=models.CASCADE, null=True, related_name="sellers")
    
    def __str__(self):
        return self.room_name
    


class Message(models.Model):
    chatroom = models.ForeignKey(ChatRoom, on_delete=models.CASCADE, null=True)
    sender = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    msg = models.TextField(null=True)
    
    
    def __str__(self):
        return str(self.chatroom)
    



# class Test(models.Model):
#     message = Charfield()

