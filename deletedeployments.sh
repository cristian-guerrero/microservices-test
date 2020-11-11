#deploys=`kubectl get deployments -n apps | tail -n1 | cut -d ' ' -f 1`
deploys=`kubectl get deployments | tail -n6 | cut -d ' ' -f 1`
for deploy in $deploys; do
    echo 'kubectl delete deployments/'$deploy
  # kubectl rollout restart deployments/$deploy -n apps
  kubectl delete deployments/$deploy 
done