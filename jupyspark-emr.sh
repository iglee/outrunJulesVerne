#!/bin/bash
export SPARK_HOME=/usr/lib/spark
export PYTHONPATH=${SPARK_HOME}/python:$PYTHONPATH
export PYSPARK_PYTHON=$HOME/anaconda/bin/python
export PYSPARK_DRIVER_PYTHON=jupyter \
export PYSPARK_DRIVER_PYTHON_OPTS="notebook --no-browser --NotebookApp.ip='0.0.0.0' --NotebookApp.port=48888" \

${SPARK_HOME}/bin/pyspark \
	--master yarn \
        --deploy-mode client \
	--packages com.databricks:spark-csv_2.11:1.5.0 \
	--packages com.amazonaws:aws-java-sdk-pom:1.10.34 \
	--packages org.apache.hadoop:hadoop-aws:2.7.3 \
	--executor-memory 9G \
        --executor-cores 3 \
	--driver-memory 3G \
	--driver-cores 1 \
	--py-files src.zip
