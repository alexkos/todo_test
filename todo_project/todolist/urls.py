from django.urls import path

from todolist.views import ListViewSet, TaskViewSet

lists = ListViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

tasks = TaskViewSet.as_view({
    'get': 'list',
    'post': 'create',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

urlpatterns = [
    path('lists/', lists, name='lists'),
    path('task-list/<int:pk>/', tasks, name='list'),
]