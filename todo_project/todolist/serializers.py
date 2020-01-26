from rest_framework import serializers

from .models import List, Task


class ListSerializer(serializers.ModelSerializer):
    class Meta:
        model = List
        fields = ['name']


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['title', 'finished', 'task_list']