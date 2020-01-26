from django.shortcuts import render

from rest_framework import viewsets

from .models import List, Task
from .serializers import ListSerializer, TaskSerializer


class ListViewSet(viewsets.ModelViewSet):
    queryset = List.objects.all()
    serializer_class = ListSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

