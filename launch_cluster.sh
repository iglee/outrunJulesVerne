#!/bin/bash


aws s3 cp bootstrap-emr.sh s3://outrunjulesverne/scripts/bootstrap-emr.sh

aws emr create-cluster \
    --name PySparkCluster \
    --release-label emr-5.9.0 \
    --applications Name=Spark \
    --ec2-attributes KeyName=spark \
    --use-default-roles \
    --instance-groups \
      InstanceGroupType=MASTER,InstanceCount=1,InstanceType=m3.xlarge \
    --bootstrap-actions Path=s3://outrunjulesverne/scripts/bootstrap-emr.sh
