#!/bin/bash


aws s3 cp bootstrap-emr.sh s3://outrunjulesverne/scripts/bootstrap-emr.sh

aws emr create-cluster \
    --name PySparkCluster_huge \
    --release-label emr-5.9.0 \
    --applications Name=Spark \
    --ec2-attributes KeyName=spark,SubnetId=subnet-fe1afab6 \
    --use-default-roles \
    --instance-groups \
      InstanceGroupType=MASTER,InstanceCount=1,InstanceType=m4.4xlarge \
    --bootstrap-actions Path=s3://outrunjulesverne/scripts/bootstrap-emr.sh
