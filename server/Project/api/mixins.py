
class GetIsActiveMixin:
    def get_queryset(self):
        status = self.request.query_params.get('status')
        queryset = super().get_queryset()    
        if status == 'active':
            return queryset.filter(isActive=True)
        elif status == 'inactive':
            return queryset.filter(isActive=False)  
        return queryset

class UpdateIsActiveMixin:
    def update(self, instance, validated_data):
        isActive = self.context['request'].data.get('isActive')
        if isActive is not None:
            instance.isActive = isActive
        return super().update(instance, validated_data)