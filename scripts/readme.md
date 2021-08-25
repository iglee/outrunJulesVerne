# Scripts for setting up AWS EMR clusters
these scripts were written for setting up spark clusters to run models on larger datasets

- `bootstrap-emr.sh`: set up clusters with hadoop/spark and download relevant packages across worker nodes
- `jupyspark-emr.sh`, `jupyspark.sh`: spark set-up
- `launch_cluster.sh`: wrapper script for launching EMR clusters with spark setup